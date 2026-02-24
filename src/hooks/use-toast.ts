import * as React from "react";
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

// Limita a quantidade de toasts simultâneos
const TOAST_LIMIT = 1;

// Tempo até remover completamente o toast após ser fechado
const TOAST_REMOVE_DELAY = 1000000;

// Tipo do toast interno
type ToasterToast = ToastProps & {
  id: string; // ID único
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

// Tipos de ações possíveis
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

// Gera um ID incremental para cada toast
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

// Define os formatos possíveis de ações
type Action =
  | { type: ActionType["ADD_TOAST"]; toast: ToasterToast }
  | { type: ActionType["UPDATE_TOAST"]; toast: Partial<ToasterToast> }
  | { type: ActionType["DISMISS_TOAST"]; toastId?: string }
  | { type: ActionType["REMOVE_TOAST"]; toastId?: string };

// Estado global
interface State {
  toasts: ToasterToast[];
}

// Guarda os timeouts de remoção
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

// Adiciona um toast à fila de remoção
const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

// Reducer que controla o estado
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        // Adiciona no topo e respeita o limite
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        // Atualiza o toast pelo ID
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // Agenda remoção
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      // Marca como fechado (open: false)
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      };
    }

    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return { ...state, toasts: [] };
      }
      return {
        ...state,
        // Remove definitivamente do estado
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

// Lista de componentes que escutam mudanças
const listeners: Array<(state: State) => void> = [];

// Estado global em memória
let memoryState: State = { toasts: [] };

// Função que dispara ações e atualiza todos os listeners
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

// Tipo público (sem ID)
type Toast = Omit<ToasterToast, "id">;

// Função para criar um toast
function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });

  const dismiss = () =>
    dispatch({ type: "DISMISS_TOAST", toastId: id });

  // Adiciona o toast ao estado
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update };
}

// Hook para usar no React
function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    // Registra como listener
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
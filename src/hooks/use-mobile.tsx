import * as React from "react";

// Define o breakpoint considerado como mobile
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Estado que guarda se é mobile ou não
  // Começa como undefined porque ainda não sabemos o tamanho da tela
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Cria uma media query para detectar telas menores que 768px
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Função que roda quando o tamanho da tela muda
    const onChange = () => {
      // Atualiza o estado verificando o tamanho atual da tela
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Escuta mudanças na media query
    mql.addEventListener("change", onChange);

    // Define o valor inicial assim que o componente monta
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Remove o listener quando o componente desmonta
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Garante que sempre retorna true ou false (nunca undefined)
  return !!isMobile;
}
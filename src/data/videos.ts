// videos.ts

export type Video = {
  id: number;
  title: string;
  description: string;
  category: "producao" | "roteiro";
  link: string;
};

export const videos: Video[] = [
  {
    id: 1,
    title: "Reels para engajamento",
    description: "Criação de conteúdo dinâmico focado em prender a atenção e aumentar o alcance orgânico.",
    category: "producao",
    link: "https://www.instagram.com/reel/CuSmmpHO1Dg/",
  },
  {
    id: 2,
    title: "Conteúdo educativo",
    description: "Roteirização e edição pensadas para transmitir valor e autoridade de forma clara e visual.",
    category: "producao",
    link: "https://www.instagram.com/reel/CyWeP7kPUVl/",
  },
  {
    id: 3,
    title: "Vídeo promocional",
    description: "Foco em conversão e desejo, unindo estética premium com uma call to action irresistível.",
    category: "producao",
    link: "https://www.instagram.com/reel/C3qlRM_PMd5/",
  },
];
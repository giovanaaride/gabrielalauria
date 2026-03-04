// videos.ts

export type Video = {
  id: number;
  title: string;
  category: "producao" | "roteiro";
  link: string;
};

export const videos: Video[] = [
  {
    id: 1,
    title: "Vídeo produzido e editado por mim",
    category: "producao",
    link: "https://www.instagram.com/reel/CuSmmpHO1Dg/",
  },
  {
    id: 2,
    title: "Vídeo roteirizado, produzido e editado por mim",
    category: "producao",
    link: "https://www.instagram.com/reel/CyWeP7kPUVl/",
  },
  {
    id: 3,
    title: "Vídeo roteirizado por mim",
    category: "roteiro",
    link: "https://www.instagram.com/reel/C3qlRM_PMd5/",
  },
];
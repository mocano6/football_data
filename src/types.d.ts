// src/types.d.ts
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void; // Dodajemy tę linię
  }
}

export {};

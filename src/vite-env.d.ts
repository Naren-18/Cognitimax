/// <reference types="vite/client" />

// declare missing module types for imports used in vite.config.ts
declare module 'lovable-tagger' {
  export function componentTagger(): any;
}

// Extend ImportMeta interface for import.meta.url
interface ImportMeta {
  readonly url: string;
}

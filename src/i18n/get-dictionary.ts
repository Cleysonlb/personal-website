import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { en } from "./dictionaries/en";
import { ptBR } from "./dictionaries/pt-BR";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "pt-BR": ptBR,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

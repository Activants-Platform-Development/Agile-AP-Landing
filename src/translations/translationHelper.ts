import { StringMap, TOptions } from "i18next";
import i18next from "./i18n";

// input needs to be a key in the language json files under translations/languages
export const TextValue = (
  input: string,
  options?: string | TOptions<StringMap> | undefined
) => {
  return i18next.t(input, options);
};

// language needs to be a language code such as 'en-US'
export const Translate = (language: string) => {
  i18next.changeLanguage(language);
};

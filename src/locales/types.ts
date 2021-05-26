export type ConvertedToObjectType<T> = {
  [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>;
};

/**

If you don't want non-existing keys to throw ts error you can simply do(also keeping the intellisense)

export type ConvertedToObjectType<T> = {
  [Styled in keyof T]: T[Styled] extends string ? string : ConvertedToObjectType<T[Styled]>;
} & {
  [Styled: string]: any;
};

*/

// Selecting the json file that our intellisense would pick from
export type TranslationJsonType = typeof import('locales/en/translation.json');

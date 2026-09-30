export type LocalizedString = import('../runtime.js').LocalizedString;
export type Translations_Intro_AutoInputs = {};
/**
* | output |
* | --- |
* | "The name, short description and description are translated automatically into other languages when you publish or edit them. Write your own text to replace a..." |
*
* @param {Translations_Intro_AutoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const translations_intro_auto: ((inputs?: Translations_Intro_AutoInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Intro_AutoInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

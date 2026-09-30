export type LocalizedString = import('../runtime.js').LocalizedString;
export type Translations_Intro_AutoInputs = {};
/**
* | output |
* | --- |
* | "The short description is translated automatically into other languages when you publish or edit it. Write your own text to replace any translation; yours is ..." |
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

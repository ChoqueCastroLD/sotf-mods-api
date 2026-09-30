export type LocalizedString = import('../runtime.js').LocalizedString;
export type Translations_Intro_ManualInputs = {};
/**
* | output |
* | --- |
* | "Write your own translation of the name, short description and description for any language. Automatic translation is not available on this server." |
*
* @param {Translations_Intro_ManualInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const translations_intro_manual: ((inputs?: Translations_Intro_ManualInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Intro_ManualInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

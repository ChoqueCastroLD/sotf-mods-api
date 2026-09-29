export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Language_SuggestInputs = {
    language: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "View this page in {language}?" |
*
* @param {Common_Language_SuggestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_language_suggest: ((inputs: Common_Language_SuggestInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Language_SuggestInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

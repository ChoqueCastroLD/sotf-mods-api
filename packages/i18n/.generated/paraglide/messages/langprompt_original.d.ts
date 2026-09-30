export type LocalizedString = import('../runtime.js').LocalizedString;
export type Langprompt_OriginalInputs = {
    language: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "View original ({language})" |
*
* @param {Langprompt_OriginalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const langprompt_original: ((inputs: Langprompt_OriginalInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_OriginalInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

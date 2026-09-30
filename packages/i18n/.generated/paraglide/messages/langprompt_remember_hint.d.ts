export type LocalizedString = import('../runtime.js').LocalizedString;
export type Langprompt_Remember_HintInputs = {};
/**
* | output |
* | --- |
* | "Don't ask again and apply it automatically next time." |
*
* @param {Langprompt_Remember_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const langprompt_remember_hint: ((inputs?: Langprompt_Remember_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_Remember_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

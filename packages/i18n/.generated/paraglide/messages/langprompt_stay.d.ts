export type LocalizedString = import('../runtime.js').LocalizedString;
export type Langprompt_StayInputs = {
    language: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Stay in {language}" |
*
* @param {Langprompt_StayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const langprompt_stay: ((inputs: Langprompt_StayInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_StayInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

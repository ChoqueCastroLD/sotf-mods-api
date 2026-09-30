export type LocalizedString = import('../runtime.js').LocalizedString;
export type Langprompt_SwitchInputs = {
    language: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Switch to {language}" |
*
* @param {Langprompt_SwitchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const langprompt_switch: ((inputs: Langprompt_SwitchInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_SwitchInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

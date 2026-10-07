export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Attention_Dismiss_NamedInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Dismiss: {name}" |
*
* @param {Basecamp_Attention_Dismiss_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_attention_dismiss_named: ((inputs: Basecamp_Attention_Dismiss_NamedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Dismiss_NamedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Attention_Show_DismissedInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Show dismissed ({count})" |
*
* @param {Basecamp_Attention_Show_DismissedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_attention_show_dismissed: ((inputs: Basecamp_Attention_Show_DismissedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Show_DismissedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

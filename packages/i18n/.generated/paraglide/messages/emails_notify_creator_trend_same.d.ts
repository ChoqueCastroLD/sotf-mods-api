export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Creator_Trend_SameInputs = {};
/**
* | output |
* | --- |
* | "Same as the week before" |
*
* @param {Emails_Notify_Creator_Trend_SameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_creator_trend_same: ((inputs?: Emails_Notify_Creator_Trend_SameInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Trend_SameInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

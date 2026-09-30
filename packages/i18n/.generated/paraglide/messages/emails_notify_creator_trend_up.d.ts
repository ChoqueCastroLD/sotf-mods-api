export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Creator_Trend_UpInputs = {
    percent: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up {percent} from the week before" |
*
* @param {Emails_Notify_Creator_Trend_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_creator_trend_up: ((inputs: Emails_Notify_Creator_Trend_UpInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Trend_UpInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

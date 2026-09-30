export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Creator_Trend_DownInputs = {
    percent: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Down {percent} from the week before" |
*
* @param {Emails_Notify_Creator_Trend_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_creator_trend_down: ((inputs: Emails_Notify_Creator_Trend_DownInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Trend_DownInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

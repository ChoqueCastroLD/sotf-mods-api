export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Reason_InstantInputs = {};
/**
* | output |
* | --- |
* | "You get this email because instant emails are on for these notifications." |
*
* @param {Emails_Notify_Reason_InstantInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_reason_instant: ((inputs?: Emails_Notify_Reason_InstantInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Reason_InstantInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

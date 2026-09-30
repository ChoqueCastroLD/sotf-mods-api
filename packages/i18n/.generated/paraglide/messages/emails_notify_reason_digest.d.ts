export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Reason_DigestInputs = {
    cadence: NonNullable<unknown>;
};
/**
* | cadence | output |
* | --- | --- |
* | "daily" | "You get this email because you chose a daily digest for these signals." |
* | * | "You get this email because you chose a weekly digest for these signals." |
*
* @param {Emails_Notify_Reason_DigestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_reason_digest: ((inputs: Emails_Notify_Reason_DigestInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Reason_DigestInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

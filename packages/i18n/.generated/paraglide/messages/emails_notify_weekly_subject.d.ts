export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Weekly_SubjectInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Your weekly SOTF Mods digest: {count__number} signal" |
* | * | "Your weekly SOTF Mods digest: {count__number} signals" |
*
* @param {Emails_Notify_Weekly_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_weekly_subject: ((inputs: Emails_Notify_Weekly_SubjectInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Weekly_SubjectInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

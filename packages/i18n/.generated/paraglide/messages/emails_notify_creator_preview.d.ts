export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Creator_PreviewInputs = {
    start: NonNullable<unknown>;
    end: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Downloads, followers, comments and reviews from {start} to {end}." |
*
* @param {Emails_Notify_Creator_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_creator_preview: ((inputs: Emails_Notify_Creator_PreviewInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_PreviewInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

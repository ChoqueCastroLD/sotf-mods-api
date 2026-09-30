export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Creator_Highlights_HeadingInputs = {};
/**
* | output |
* | --- |
* | "Highlights" |
*
* @param {Emails_Notify_Creator_Highlights_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_creator_highlights_heading: ((inputs?: Emails_Notify_Creator_Highlights_HeadingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Highlights_HeadingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

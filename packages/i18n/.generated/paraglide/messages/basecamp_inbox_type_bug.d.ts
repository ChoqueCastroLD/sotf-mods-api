export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Inbox_Type_BugInputs = {};
/**
* | output |
* | --- |
* | "Bug report" |
*
* @param {Basecamp_Inbox_Type_BugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_inbox_type_bug: ((inputs?: Basecamp_Inbox_Type_BugInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Type_BugInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

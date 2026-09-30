export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Inbox_Template_InsertInputs = {};
/**
* | output |
* | --- |
* | "Insert a saved reply" |
*
* @param {Basecamp_Inbox_Template_InsertInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_inbox_template_insert: ((inputs?: Basecamp_Inbox_Template_InsertInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Template_InsertInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

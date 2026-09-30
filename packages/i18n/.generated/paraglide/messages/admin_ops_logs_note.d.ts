export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Logs_NoteInputs = {};
/**
* | output |
* | --- |
* | "Rates of 404, 410 and 5xx answers are not stored: read them in the API logs (docs/operations/monitoring.md)." |
*
* @param {Admin_Ops_Logs_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_logs_note: ((inputs?: Admin_Ops_Logs_NoteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Logs_NoteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

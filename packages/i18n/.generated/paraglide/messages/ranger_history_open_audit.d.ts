export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_History_Open_AuditInputs = {};
/**
* | output |
* | --- |
* | "Their audit trail" |
*
* @param {Ranger_History_Open_AuditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_history_open_audit: ((inputs?: Ranger_History_Open_AuditInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_Open_AuditInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dl_DiscardInputs = {};
/**
* | output |
* | --- |
* | "Discard" |
*
* @param {Admin_Ops_Dl_DiscardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dl_discard: ((inputs?: Admin_Ops_Dl_DiscardInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_DiscardInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

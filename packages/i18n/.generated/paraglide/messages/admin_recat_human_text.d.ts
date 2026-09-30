export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Human_TextInputs = {};
/**
* | output |
* | --- |
* | "Review each suggestion: change the target category or the tags, select the rows you agree with and apply them. Every change is logged." |
*
* @param {Admin_Recat_Human_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_human_text: ((inputs?: Admin_Recat_Human_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Human_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Tax_Retire_ConflictInputs = {};
/**
* | output |
* | --- |
* | "Some live mods still use it. Recategorize them first." |
*
* @param {Admin_Tax_Retire_ConflictInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_tax_retire_conflict: ((inputs?: Admin_Tax_Retire_ConflictInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Retire_ConflictInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

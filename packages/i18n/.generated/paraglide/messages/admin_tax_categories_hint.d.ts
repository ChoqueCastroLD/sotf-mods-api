export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Tax_Categories_HintInputs = {};
/**
* | output |
* | --- |
* | "Categories are never deleted: retire one once its mods have moved, and add its slug to the successor’s legacy slugs so old links keep working." |
*
* @param {Admin_Tax_Categories_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_tax_categories_hint: ((inputs?: Admin_Tax_Categories_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Categories_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

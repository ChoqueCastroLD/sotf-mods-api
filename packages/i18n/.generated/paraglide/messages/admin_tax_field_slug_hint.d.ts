export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Tax_Field_Slug_HintInputs = {};
/**
* | output |
* | --- |
* | "Part of the URL. Changing it breaks old links unless the old slug stays as a legacy slug." |
*
* @param {Admin_Tax_Field_Slug_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_tax_field_slug_hint: ((inputs?: Admin_Tax_Field_Slug_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Slug_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Tax_Error_LegacyInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up to {max} legacy slugs." |
*
* @param {Admin_Tax_Error_LegacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_tax_error_legacy: ((inputs: Admin_Tax_Error_LegacyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Error_LegacyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

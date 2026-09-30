export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Awards_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Mod of the Week, staff picks and the monthly awards. A new award replaces the one of the same kind and period, which is how the automatic Mod of the Week is ..." |
*
* @param {Admin_Awards_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_awards_description: ((inputs?: Admin_Awards_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

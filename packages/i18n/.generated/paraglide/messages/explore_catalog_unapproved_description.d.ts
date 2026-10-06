export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Catalog_Unapproved_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Mods that passed the automated checks and are waiting for approval." |
*
* @param {Explore_Catalog_Unapproved_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_catalog_unapproved_description: ((inputs?: Explore_Catalog_Unapproved_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Unapproved_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

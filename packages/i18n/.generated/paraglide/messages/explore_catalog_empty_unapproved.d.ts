export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Catalog_Empty_UnapprovedInputs = {};
/**
* | output |
* | --- |
* | "There are no unapproved mods to show right now." |
*
* @param {Explore_Catalog_Empty_UnapprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_catalog_empty_unapproved: ((inputs?: Explore_Catalog_Empty_UnapprovedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Empty_UnapprovedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

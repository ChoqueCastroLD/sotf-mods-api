export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Catalog_Category_LinkInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Category: {name}" |
*
* @param {Explore_Catalog_Category_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_catalog_category_link: ((inputs: Explore_Catalog_Category_LinkInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Category_LinkInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

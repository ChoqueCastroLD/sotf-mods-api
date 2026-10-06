export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Catalog_CountInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod" |
* | * | "{count__number} mods" |
*
* @param {Explore_Catalog_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_catalog_count: ((inputs: Explore_Catalog_CountInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_CountInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

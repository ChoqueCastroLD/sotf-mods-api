export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Catalog_DownloadsInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} download" |
* | * | "{count__number} downloads" |
*
* @param {Explore_Catalog_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_catalog_downloads: ((inputs: Explore_Catalog_DownloadsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_DownloadsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

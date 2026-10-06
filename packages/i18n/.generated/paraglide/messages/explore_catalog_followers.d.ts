export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Catalog_FollowersInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} follower" |
* | * | "{count__number} followers" |
*
* @param {Explore_Catalog_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_catalog_followers: ((inputs: Explore_Catalog_FollowersInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_FollowersInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

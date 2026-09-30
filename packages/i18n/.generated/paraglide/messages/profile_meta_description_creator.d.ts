export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Meta_Description_CreatorInputs = {
    name: NonNullable<unknown>;
    count: NonNullable<unknown>;
    downloadsCount: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
    followers: NonNullable<unknown>;
};
/**
* | count__plural | downloadsCount__plural | followers__plural | output |
* | --- | --- | --- | --- |
* | "one" | "one" | "one" | "{name} makes Sons of the Forest mods: {count__number} mod or build, {downloads} download, {followers__number} follower. Free downloads on SOTF Mods." |
* | "one" | "one" | * | "{name} makes Sons of the Forest mods: {count__number} mod or build, {downloads} download, {followers__number} followers. Free downloads on SOTF Mods." |
* | "one" | * | "one" | "{name} makes Sons of the Forest mods: {count__number} mod or build, {downloads} downloads, {followers__number} follower. Free downloads on SOTF Mods." |
* | "one" | * | * | "{name} makes Sons of the Forest mods: {count__number} mod or build, {downloads} downloads, {followers__number} followers. Free downloads on SOTF Mods." |
* | * | "one" | "one" | "{name} makes Sons of the Forest mods: {count__number} mods and builds, {downloads} download, {followers__number} follower. Free downloads on SOTF Mods." |
* | * | "one" | * | "{name} makes Sons of the Forest mods: {count__number} mods and builds, {downloads} download, {followers__number} followers. Free downloads on SOTF Mods." |
* | * | * | "one" | "{name} makes Sons of the Forest mods: {count__number} mods and builds, {downloads} downloads, {followers__number} follower. Free downloads on SOTF Mods." |
* | * | * | * | "{name} makes Sons of the Forest mods: {count__number} mods and builds, {downloads} downloads, {followers__number} followers. Free downloads on SOTF Mods." |
*
* @param {Profile_Meta_Description_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_meta_description_creator: ((inputs: Profile_Meta_Description_CreatorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Description_CreatorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

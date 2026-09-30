export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Creators_Meta_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "The people behind Sons of the Forest mods and builds: downloads, followers, tiers and their best-known work. Follow a creator to hear about new releases." |
*
* @param {Profile_Creators_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_creators_meta_description: ((inputs?: Profile_Creators_Meta_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Meta_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

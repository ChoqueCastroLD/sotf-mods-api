export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Island_Favorite_HintInputs = {};
/**
* | output |
* | --- |
* | "Have a mod rated 4.5 or higher with at least 20 reviews." |
*
* @param {Profile_Badge_Island_Favorite_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_island_favorite_hint: ((inputs?: Profile_Badge_Island_Favorite_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Island_Favorite_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

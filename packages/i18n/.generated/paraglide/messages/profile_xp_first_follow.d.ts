export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Xp_First_FollowInputs = {};
/**
* | output |
* | --- |
* | "Follow your first mod or creator" |
*
* @param {Profile_Xp_First_FollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_xp_first_follow: ((inputs?: Profile_Xp_First_FollowInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_First_FollowInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

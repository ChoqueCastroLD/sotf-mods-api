export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Verified_Creator_HintInputs = {};
/**
* | output |
* | --- |
* | "Creators verified by the SOTF Mods team." |
*
* @param {Profile_Badge_Verified_Creator_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_verified_creator_hint: ((inputs?: Profile_Badge_Verified_Creator_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Verified_Creator_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Xp_Patch_Day_ReleaseInputs = {};
/**
* | output |
* | --- |
* | "Creator: compatible version within 14 days of a breaking game update" |
*
* @param {Profile_Xp_Patch_Day_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_xp_patch_day_release: ((inputs?: Profile_Xp_Patch_Day_ReleaseInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Patch_Day_ReleaseInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

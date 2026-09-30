export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Xp_Limit_Per_BuildInputs = {};
/**
* | output |
* | --- |
* | "Once per game build" |
*
* @param {Profile_Xp_Limit_Per_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_xp_limit_per_build: ((inputs?: Profile_Xp_Limit_Per_BuildInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Limit_Per_BuildInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Bug_Hunter_NameInputs = {};
/**
* | output |
* | --- |
* | "Bug Hunter" |
*
* @param {Profile_Badge_Bug_Hunter_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_bug_hunter_name: ((inputs?: Profile_Badge_Bug_Hunter_NameInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Bug_Hunter_NameInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

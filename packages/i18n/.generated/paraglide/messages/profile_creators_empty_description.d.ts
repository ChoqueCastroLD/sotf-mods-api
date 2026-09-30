export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Creators_Empty_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Nobody has published a mod here yet. The first one gets the Crash Landing badge." |
*
* @param {Profile_Creators_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_creators_empty_description: ((inputs?: Profile_Creators_Empty_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Empty_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

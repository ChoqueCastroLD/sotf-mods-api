export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badges_Empty_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Badges are earned by publishing, reviewing, reporting compatibility and helping others. Locked ones show up here as dashed outlines." |
*
* @param {Profile_Badges_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badges_empty_description: ((inputs?: Profile_Badges_Empty_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Empty_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

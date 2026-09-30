export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Meta_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "How Survivor ranks, XP, creator tiers, badges and mod milestones work on SOTF Mods. Public rules that reward quality and help, not volume." |
*
* @param {Profile_Achievements_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_meta_description: ((inputs?: Profile_Achievements_Meta_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Meta_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

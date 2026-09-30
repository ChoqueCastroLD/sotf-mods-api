export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Motw_BodyInputs = {};
/**
* | output |
* | --- |
* | "Every Monday the mod with the strongest momentum among unique downloads wins, as long as it’s published, not broken on the current build and well rated. The ..." |
*
* @param {Profile_Achievements_Motw_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_motw_body: ((inputs?: Profile_Achievements_Motw_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Motw_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

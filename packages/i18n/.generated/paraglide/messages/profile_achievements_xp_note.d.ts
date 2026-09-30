export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Xp_NoteInputs = {};
/**
* | output |
* | --- |
* | "Actions on your own content don’t count. XP is audited and can be reversed if it came from abuse." |
*
* @param {Profile_Achievements_Xp_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_xp_note: ((inputs?: Profile_Achievements_Xp_NoteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Xp_NoteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

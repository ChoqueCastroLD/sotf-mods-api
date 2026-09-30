export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Original_Survivor_HintInputs = {
    year: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Account created in {year}, before SOTF Mods v2 launched." |
*
* @param {Profile_Badge_Original_Survivor_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_original_survivor_hint: ((inputs: Profile_Badge_Original_Survivor_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Original_Survivor_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

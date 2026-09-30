export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Original_Survivor_NameInputs = {
    year: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Original Survivor {year}" |
*
* @param {Profile_Badge_Original_Survivor_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_original_survivor_name: ((inputs: Profile_Badge_Original_Survivor_NameInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Original_Survivor_NameInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

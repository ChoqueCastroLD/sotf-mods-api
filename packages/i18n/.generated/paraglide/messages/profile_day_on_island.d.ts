export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Day_On_IslandInputs = {
    day: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Day {day} on the island" |
*
* @param {Profile_Day_On_IslandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_day_on_island: ((inputs: Profile_Day_On_IslandInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Day_On_IslandInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

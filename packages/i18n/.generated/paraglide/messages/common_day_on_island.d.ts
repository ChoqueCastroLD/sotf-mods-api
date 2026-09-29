export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Day_On_IslandInputs = {
    day: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Day {day__number} on the island" |
*
* @param {Common_Day_On_IslandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_day_on_island: ((inputs: Common_Day_On_IslandInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Day_On_IslandInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

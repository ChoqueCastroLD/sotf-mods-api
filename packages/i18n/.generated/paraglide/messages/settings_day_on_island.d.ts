export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Day_On_IslandInputs = {
    day: NonNullable<unknown>;
};
/**
* | day__plural | output |
* | --- | --- |
* | "one" | "{day__number} day ago" |
* | * | "{day__number} days ago" |
*
* @param {Settings_Day_On_IslandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_day_on_island: ((inputs: Settings_Day_On_IslandInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Day_On_IslandInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

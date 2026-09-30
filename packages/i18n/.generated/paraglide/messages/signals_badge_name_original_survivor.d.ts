export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Badge_Name_Original_SurvivorInputs = {
    year: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Original Survivor {year}" |
*
* @param {Signals_Badge_Name_Original_SurvivorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_badge_name_original_survivor: ((inputs: Signals_Badge_Name_Original_SurvivorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Original_SurvivorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

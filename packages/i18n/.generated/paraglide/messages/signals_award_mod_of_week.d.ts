export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Award_Mod_Of_WeekInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} is Mod of the Week" |
*
* @param {Signals_Award_Mod_Of_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_award_mod_of_week: ((inputs: Signals_Award_Mod_Of_WeekInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Award_Mod_Of_WeekInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

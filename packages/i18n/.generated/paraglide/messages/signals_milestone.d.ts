export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_MilestoneInputs = {
    mod: NonNullable<unknown>;
    threshold: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} passed {threshold__number} downloads" |
*
* @param {Signals_MilestoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_milestone: ((inputs: Signals_MilestoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_MilestoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Award_Build_Of_MonthInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} is Build of the Month" |
*
* @param {Signals_Award_Build_Of_MonthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_award_build_of_month: ((inputs: Signals_Award_Build_Of_MonthInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Award_Build_Of_MonthInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Award_Staff_PickInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} is a Staff pick" |
*
* @param {Signals_Award_Staff_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_award_staff_pick: ((inputs: Signals_Award_Staff_PickInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Award_Staff_PickInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

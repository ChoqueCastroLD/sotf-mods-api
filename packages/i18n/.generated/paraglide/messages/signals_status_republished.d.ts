export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Status_RepublishedInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Your mod {mod} is public again" |
*
* @param {Signals_Status_RepublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_status_republished: ((inputs: Signals_Status_RepublishedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_RepublishedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

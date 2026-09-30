export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Status_RejectedInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Your mod {mod} was rejected" |
*
* @param {Signals_Status_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_status_rejected: ((inputs: Signals_Status_RejectedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_RejectedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

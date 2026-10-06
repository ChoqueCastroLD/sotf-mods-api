export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Status_Changes_RequestedInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The moderators asked for changes to {mod}" |
*
* @param {Signals_Status_Changes_RequestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_status_changes_requested: ((inputs: Signals_Status_Changes_RequestedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_Changes_RequestedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Status_UnapprovedInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Your mod {mod} is pending approval again" |
*
* @param {Signals_Status_UnapprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_status_unapproved: ((inputs: Signals_Status_UnapprovedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_UnapprovedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

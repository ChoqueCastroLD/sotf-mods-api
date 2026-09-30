export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Compat_AcknowledgedInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The author of {mod} saw your field report" |
*
* @param {Signals_Compat_AcknowledgedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_compat_acknowledged: ((inputs: Signals_Compat_AcknowledgedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Compat_AcknowledgedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

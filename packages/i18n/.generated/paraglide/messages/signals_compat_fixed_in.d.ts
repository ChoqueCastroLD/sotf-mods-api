export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Compat_Fixed_InInputs = {
    mod: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Your field report on {mod} is fixed in {version}" |
*
* @param {Signals_Compat_Fixed_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_compat_fixed_in: ((inputs: Signals_Compat_Fixed_InInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Compat_Fixed_InInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

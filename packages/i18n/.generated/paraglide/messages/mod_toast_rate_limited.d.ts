export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Toast_Rate_LimitedInputs = {};
/**
* | output |
* | --- |
* | "Too many tries. Wait a minute and try again." |
*
* @param {Mod_Toast_Rate_LimitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_toast_rate_limited: ((inputs?: Mod_Toast_Rate_LimitedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Rate_LimitedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

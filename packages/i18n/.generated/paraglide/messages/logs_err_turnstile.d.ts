export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Err_TurnstileInputs = {};
/**
* | output |
* | --- |
* | "The human check failed. Try again." |
*
* @param {Logs_Err_TurnstileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_err_turnstile: ((inputs?: Logs_Err_TurnstileInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_TurnstileInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

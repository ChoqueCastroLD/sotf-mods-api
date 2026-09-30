export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Rate_LimitedInputs = {
    seconds: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Too many attempts. Wait {seconds__number} s and try again." |
*
* @param {Auth_Rate_LimitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_rate_limited: ((inputs: Auth_Rate_LimitedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Rate_LimitedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Oauth_Error_Two_FactorInputs = {};
/**
* | output |
* | --- |
* | "This account uses two-factor authentication. Log in with your password and code, then link Discord in Settings." |
*
* @param {Oauth_Error_Two_FactorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const oauth_error_two_factor: ((inputs?: Oauth_Error_Two_FactorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_Two_FactorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

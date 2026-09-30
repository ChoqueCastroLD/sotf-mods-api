export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Twofactor_WrongInputs = {};
/**
* | output |
* | --- |
* | "That code is not correct. Try again." |
*
* @param {Auth_Twofactor_WrongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_twofactor_wrong: ((inputs?: Auth_Twofactor_WrongInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_WrongInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

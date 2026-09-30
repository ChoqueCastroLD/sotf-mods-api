export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Security_Tip_PasswordInputs = {};
/**
* | output |
* | --- |
* | "Use a password you don’t use anywhere else." |
*
* @param {Settings_Security_Tip_PasswordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_security_tip_password: ((inputs?: Settings_Security_Tip_PasswordInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_Tip_PasswordInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Security_Tip_SessionsInputs = {};
/**
* | output |
* | --- |
* | "Log out of shared or public computers when you’re done." |
*
* @param {Settings_Security_Tip_SessionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_security_tip_sessions: ((inputs?: Settings_Security_Tip_SessionsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_Tip_SessionsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

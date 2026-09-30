export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_2fa_Code_Or_RecoveryInputs = {};
/**
* | output |
* | --- |
* | "Code from your app or a recovery code" |
*
* @param {Settings_2fa_Code_Or_RecoveryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_2fa_code_or_recovery: ((inputs?: Settings_2fa_Code_Or_RecoveryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Code_Or_RecoveryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

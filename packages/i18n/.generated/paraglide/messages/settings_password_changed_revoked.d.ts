export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Password_Changed_RevokedInputs = {};
/**
* | output |
* | --- |
* | "Password changed and other devices signed out" |
*
* @param {Settings_Password_Changed_RevokedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_password_changed_revoked: ((inputs?: Settings_Password_Changed_RevokedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_Changed_RevokedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

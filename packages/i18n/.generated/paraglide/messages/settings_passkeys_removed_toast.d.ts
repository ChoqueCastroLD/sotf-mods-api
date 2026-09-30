export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Passkeys_Removed_ToastInputs = {};
/**
* | output |
* | --- |
* | "Passkey removed." |
*
* @param {Settings_Passkeys_Removed_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_passkeys_removed_toast: ((inputs?: Settings_Passkeys_Removed_ToastInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_Removed_ToastInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

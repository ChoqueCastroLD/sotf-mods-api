export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_2fa_Qr_AltInputs = {};
/**
* | output |
* | --- |
* | "QR code for your authenticator app" |
*
* @param {Settings_2fa_Qr_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_2fa_qr_alt: ((inputs?: Settings_2fa_Qr_AltInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Qr_AltInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

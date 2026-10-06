export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Email_TextInputs = {};
/**
* | output |
* | --- |
* | "Used to log in and for the emails you choose to get. To change it, confirm the new address from your inbox; we’ll let the old one know." |
*
* @param {Settings_Email_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_email_text: ((inputs?: Settings_Email_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

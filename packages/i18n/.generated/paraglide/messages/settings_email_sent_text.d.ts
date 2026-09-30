export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Email_Sent_TextInputs = {
    email: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "We sent a confirmation link to {email}. Your address changes once you open it." |
*
* @param {Settings_Email_Sent_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_email_sent_text: ((inputs: Settings_Email_Sent_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_Sent_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Export_ExpiryInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The link expires on {when} (UTC). You can request a new export after that." |
*
* @param {Emails_Auth_Export_ExpiryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_export_expiry: ((inputs: Emails_Auth_Export_ExpiryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Export_ExpiryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

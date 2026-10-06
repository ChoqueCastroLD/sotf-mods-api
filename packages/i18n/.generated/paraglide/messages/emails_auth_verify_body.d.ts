export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Verify_BodyInputs = {};
/**
* | output |
* | --- |
* | "Welcome to SOTF Mods. Confirm this address to publish mods, comment and write reviews." |
*
* @param {Emails_Auth_Verify_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_verify_body: ((inputs?: Emails_Auth_Verify_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Verify_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

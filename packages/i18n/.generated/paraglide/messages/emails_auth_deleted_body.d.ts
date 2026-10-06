export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Deleted_BodyInputs = {};
/**
* | output |
* | --- |
* | "Your personal data has been erased. Comments and reviews remain under “Deleted user”. Thank you for being part of SOTF Mods." |
*
* @param {Emails_Auth_Deleted_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_deleted_body: ((inputs?: Emails_Auth_Deleted_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deleted_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

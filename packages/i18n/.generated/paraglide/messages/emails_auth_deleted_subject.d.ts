export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Deleted_SubjectInputs = {};
/**
* | output |
* | --- |
* | "Your SOTF Mods account was deleted" |
*
* @param {Emails_Auth_Deleted_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_deleted_subject: ((inputs?: Emails_Auth_Deleted_SubjectInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deleted_SubjectInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

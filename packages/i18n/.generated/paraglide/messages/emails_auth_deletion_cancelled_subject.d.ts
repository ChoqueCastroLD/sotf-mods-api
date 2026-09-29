export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Deletion_Cancelled_SubjectInputs = {};
/**
* | output |
* | --- |
* | "Your SOTF Mods account will not be deleted" |
*
* @param {Emails_Auth_Deletion_Cancelled_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_deletion_cancelled_subject: ((inputs?: Emails_Auth_Deletion_Cancelled_SubjectInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_Cancelled_SubjectInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Email_Notice_SubjectInputs = {};
/**
* | output |
* | --- |
* | "The email of your SOTF Mods account is being changed" |
*
* @param {Emails_Auth_Email_Notice_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_email_notice_subject: ((inputs?: Emails_Auth_Email_Notice_SubjectInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_SubjectInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

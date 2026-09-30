export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Email_Notice_Not_YouInputs = {};
/**
* | output |
* | --- |
* | "Wasn’t you? Change your password now and review your sessions." |
*
* @param {Emails_Auth_Email_Notice_Not_YouInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_email_notice_not_you: ((inputs?: Emails_Auth_Email_Notice_Not_YouInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_Not_YouInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

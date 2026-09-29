export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Email_Notice_BodyInputs = {
    when: NonNullable<unknown>;
    email: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "On {when} (UTC) someone asked to change the email of your account to {email}. Nothing changes until the new address is confirmed." |
*
* @param {Emails_Auth_Email_Notice_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_email_notice_body: ((inputs: Emails_Auth_Email_Notice_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

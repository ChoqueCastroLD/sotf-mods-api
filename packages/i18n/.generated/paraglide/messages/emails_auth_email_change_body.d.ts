export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Email_Change_BodyInputs = {
    email: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You asked to use {email} for your SOTF Mods account. Confirm it to finish the change." |
*
* @param {Emails_Auth_Email_Change_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_email_change_body: ((inputs: Emails_Auth_Email_Change_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Change_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

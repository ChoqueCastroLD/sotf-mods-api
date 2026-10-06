export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_New_Login_BodyInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "A login to your account was recorded on {when} (UTC) from a device or country we had not seen before." |
*
* @param {Emails_Auth_New_Login_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_new_login_body: ((inputs: Emails_Auth_New_Login_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

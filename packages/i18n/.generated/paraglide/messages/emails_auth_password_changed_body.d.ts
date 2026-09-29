export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Password_Changed_BodyInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The password of your account was changed on {when} (UTC)." |
*
* @param {Emails_Auth_Password_Changed_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_password_changed_body: ((inputs: Emails_Auth_Password_Changed_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Password_Changed_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

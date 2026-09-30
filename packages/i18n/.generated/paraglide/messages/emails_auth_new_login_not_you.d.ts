export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_New_Login_Not_YouInputs = {};
/**
* | output |
* | --- |
* | "Wasn’t you? Reset your password right away and review your active sessions." |
*
* @param {Emails_Auth_New_Login_Not_YouInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_new_login_not_you: ((inputs?: Emails_Auth_New_Login_Not_YouInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_Not_YouInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

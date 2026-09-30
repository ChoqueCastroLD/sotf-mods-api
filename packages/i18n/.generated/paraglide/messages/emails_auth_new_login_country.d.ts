export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_New_Login_CountryInputs = {
    country: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Country: {country}" |
*
* @param {Emails_Auth_New_Login_CountryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_new_login_country: ((inputs: Emails_Auth_New_Login_CountryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_CountryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

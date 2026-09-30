export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Reset_ExpiryInputs = {
    minutes: NonNullable<unknown>;
};
/**
* | minutes__plural | output |
* | --- | --- |
* | "one" | "This link works once and expires in {minutes__number} minute." |
* | * | "This link works once and expires in {minutes__number} minutes." |
*
* @param {Emails_Auth_Reset_ExpiryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_reset_expiry: ((inputs: Emails_Auth_Reset_ExpiryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Reset_ExpiryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

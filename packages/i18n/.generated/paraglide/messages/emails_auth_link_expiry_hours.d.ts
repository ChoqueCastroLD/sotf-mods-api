export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Link_Expiry_HoursInputs = {
    hours: NonNullable<unknown>;
};
/**
* | hours__plural | output |
* | --- | --- |
* | "one" | "This link works once and expires in {hours__number} hour." |
* | * | "This link works once and expires in {hours__number} hours." |
*
* @param {Emails_Auth_Link_Expiry_HoursInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_link_expiry_hours: ((inputs: Emails_Auth_Link_Expiry_HoursInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Link_Expiry_HoursInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

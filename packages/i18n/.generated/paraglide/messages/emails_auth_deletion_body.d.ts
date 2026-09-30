export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Deletion_BodyInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Your account will be deleted on {when} (UTC). Until then you can cancel it from your settings and everything stays as it is." |
*
* @param {Emails_Auth_Deletion_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_deletion_body: ((inputs: Emails_Auth_Deletion_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

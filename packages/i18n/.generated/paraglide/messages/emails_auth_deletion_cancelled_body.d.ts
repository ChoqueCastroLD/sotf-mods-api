export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Deletion_Cancelled_BodyInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The deletion was cancelled on {when} (UTC). Your account stays as it is." |
*
* @param {Emails_Auth_Deletion_Cancelled_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_deletion_cancelled_body: ((inputs: Emails_Auth_Deletion_Cancelled_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_Cancelled_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

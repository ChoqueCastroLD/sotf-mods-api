export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Deletion_Mode_KeepInputs = {};
/**
* | output |
* | --- |
* | "Your mods will stay published without your name." |
*
* @param {Emails_Auth_Deletion_Mode_KeepInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_deletion_mode_keep: ((inputs?: Emails_Auth_Deletion_Mode_KeepInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_Mode_KeepInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

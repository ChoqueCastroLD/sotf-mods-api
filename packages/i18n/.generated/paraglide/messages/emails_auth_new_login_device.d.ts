export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_New_Login_DeviceInputs = {
    device: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Device: {device}" |
*
* @param {Emails_Auth_New_Login_DeviceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_new_login_device: ((inputs: Emails_Auth_New_Login_DeviceInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_DeviceInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

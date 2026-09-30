export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Field_New_Password_HintInputs = {};
/**
* | output |
* | --- |
* | "At least 10 characters. A few random words work great." |
*
* @param {Auth_Field_New_Password_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_field_new_password_hint: ((inputs?: Auth_Field_New_Password_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_New_Password_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

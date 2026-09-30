export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Menu_Signed_In_AsInputs = {};
/**
* | output |
* | --- |
* | "Signed in as" |
*
* @param {Auth_Menu_Signed_In_AsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_menu_signed_in_as: ((inputs?: Auth_Menu_Signed_In_AsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Menu_Signed_In_AsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

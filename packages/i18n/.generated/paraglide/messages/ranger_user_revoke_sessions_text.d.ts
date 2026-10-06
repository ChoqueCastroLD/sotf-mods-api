export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_User_Revoke_Sessions_TextInputs = {};
/**
* | output |
* | --- |
* | "Every session of this account ends now. They can log in again unless they are suspended or banned." |
*
* @param {Ranger_User_Revoke_Sessions_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_user_revoke_sessions_text: ((inputs?: Ranger_User_Revoke_Sessions_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Revoke_Sessions_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

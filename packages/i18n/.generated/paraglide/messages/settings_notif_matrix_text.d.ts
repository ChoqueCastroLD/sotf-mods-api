export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Notif_Matrix_TextInputs = {};
/**
* | output |
* | --- |
* | "For each kind of signal, choose whether it shows in the app and how often it’s emailed. Digests bundle everything into one email." |
*
* @param {Settings_Notif_Matrix_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_notif_matrix_text: ((inputs?: Settings_Notif_Matrix_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Matrix_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

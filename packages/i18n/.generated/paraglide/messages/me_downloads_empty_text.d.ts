export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Downloads_Empty_TextInputs = {};
/**
* | output |
* | --- |
* | "Download a mod while signed in and it shows up here, with an alert when a new version is out." |
*
* @param {Me_Downloads_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_downloads_empty_text: ((inputs?: Me_Downloads_Empty_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Empty_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

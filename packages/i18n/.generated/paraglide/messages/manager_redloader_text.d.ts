export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Redloader_TextInputs = {};
/**
* | output |
* | --- |
* | "Install, repair, update or remove RedLoader from the settings. You can pin a version and undo the last change." |
*
* @param {Manager_Redloader_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_redloader_text: ((inputs?: Manager_Redloader_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Redloader_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Hint_Redloader_TextInputs = {};
/**
* | output |
* | --- |
* | "The zip has a RedLoader manifest.json. Sons of the Forest + RedLoader mods are installed by RedManager and get their name and version from the manifest." |
*
* @param {Upload_Hint_Redloader_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_hint_redloader_text: ((inputs?: Upload_Hint_Redloader_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Hint_Redloader_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

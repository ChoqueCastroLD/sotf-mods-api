export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_File_Intro_ModInputs = {};
/**
* | output |
* | --- |
* | "Drop the .zip you’d give to players. We open it in your browser first and show what’s inside before anything is uploaded." |
*
* @param {Upload_File_Intro_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_file_intro_mod: ((inputs?: Upload_File_Intro_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Intro_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

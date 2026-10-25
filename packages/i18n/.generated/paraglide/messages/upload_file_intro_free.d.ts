export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_File_Intro_FreeInputs = {};
/**
* | output |
* | --- |
* | "Upload the file players install: a .zip, a .dll, a .mod or anything else your loader uses." |
*
* @param {Upload_File_Intro_FreeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_file_intro_free: ((inputs?: Upload_File_Intro_FreeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Intro_FreeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

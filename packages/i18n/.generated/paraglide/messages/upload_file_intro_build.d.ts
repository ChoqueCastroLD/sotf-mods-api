export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_File_Intro_BuildInputs = {};
/**
* | output |
* | --- |
* | "Drop the build .json exported by BuildShare. Its thumbnail, element count and version are read automatically." |
*
* @param {Upload_File_Intro_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_file_intro_build: ((inputs?: Upload_File_Intro_BuildInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Intro_BuildInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

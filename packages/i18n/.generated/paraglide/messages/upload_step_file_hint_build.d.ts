export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Step_File_Hint_BuildInputs = {};
/**
* | output |
* | --- |
* | "Build .json file" |
*
* @param {Upload_Step_File_Hint_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_step_file_hint_build: ((inputs?: Upload_Step_File_Hint_BuildInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_File_Hint_BuildInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

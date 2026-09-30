export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_File_InspectingInputs = {};
/**
* | output |
* | --- |
* | "The file is still being checked." |
*
* @param {Upload_Preflight_File_InspectingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_file_inspecting: ((inputs?: Upload_Preflight_File_InspectingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_File_InspectingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

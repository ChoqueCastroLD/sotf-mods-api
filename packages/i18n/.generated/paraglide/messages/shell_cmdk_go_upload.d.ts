export type LocalizedString = import('../runtime.js').LocalizedString;
export type Shell_Cmdk_Go_UploadInputs = {};
/**
* | output |
* | --- |
* | "Upload a mod" |
*
* @param {Shell_Cmdk_Go_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const shell_cmdk_go_upload: ((inputs?: Shell_Cmdk_Go_UploadInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Go_UploadInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

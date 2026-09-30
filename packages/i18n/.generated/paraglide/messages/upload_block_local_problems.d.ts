export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Block_Local_ProblemsInputs = {};
/**
* | output |
* | --- |
* | "The checks below found errors. Fix them and choose the file again." |
*
* @param {Upload_Block_Local_ProblemsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_block_local_problems: ((inputs?: Upload_Block_Local_ProblemsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Local_ProblemsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

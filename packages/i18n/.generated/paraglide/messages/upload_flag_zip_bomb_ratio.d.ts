export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_Zip_Bomb_RatioInputs = {};
/**
* | output |
* | --- |
* | "The compression ratio is suspiciously high." |
*
* @param {Upload_Flag_Zip_Bomb_RatioInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_zip_bomb_ratio: ((inputs?: Upload_Flag_Zip_Bomb_RatioInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Zip_Bomb_RatioInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

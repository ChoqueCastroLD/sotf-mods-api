export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_Zip_Too_Many_EntriesInputs = {};
/**
* | output |
* | --- |
* | "The zip has too many files (5,000 max)." |
*
* @param {Upload_Flag_Zip_Too_Many_EntriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_zip_too_many_entries: ((inputs?: Upload_Flag_Zip_Too_Many_EntriesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Zip_Too_Many_EntriesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

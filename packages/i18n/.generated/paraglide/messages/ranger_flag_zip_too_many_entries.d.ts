export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Flag_Zip_Too_Many_EntriesInputs = {};
/**
* | output |
* | --- |
* | "Too many files in the zip" |
*
* @param {Ranger_Flag_Zip_Too_Many_EntriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_flag_zip_too_many_entries: ((inputs?: Ranger_Flag_Zip_Too_Many_EntriesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Zip_Too_Many_EntriesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

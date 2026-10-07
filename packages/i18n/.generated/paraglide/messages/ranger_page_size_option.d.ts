export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Page_Size_OptionInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{count} per page" |
*
* @param {Ranger_Page_Size_OptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_page_size_option: ((inputs: Ranger_Page_Size_OptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Page_Size_OptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

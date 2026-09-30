export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_List_Title_PageInputs = {
    title: NonNullable<unknown>;
    page: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{title} — page {page}" |
*
* @param {Kits_List_Title_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_list_title_page: ((inputs: Kits_List_Title_PageInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_List_Title_PageInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

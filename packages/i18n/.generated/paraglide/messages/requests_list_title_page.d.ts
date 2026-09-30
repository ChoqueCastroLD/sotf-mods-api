export type LocalizedString = import('../runtime.js').LocalizedString;
export type Requests_List_Title_PageInputs = {
    title: NonNullable<unknown>;
    page: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{title} — page {page__number}" |
*
* @param {Requests_List_Title_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const requests_list_title_page: ((inputs: Requests_List_Title_PageInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_List_Title_PageInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

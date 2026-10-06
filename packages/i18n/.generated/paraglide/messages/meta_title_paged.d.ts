export type LocalizedString = import('../runtime.js').LocalizedString;
export type Meta_Title_PagedInputs = {
    title: NonNullable<unknown>;
    page: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{title} (page {page__number})" |
*
* @param {Meta_Title_PagedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const meta_title_paged: ((inputs: Meta_Title_PagedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Title_PagedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

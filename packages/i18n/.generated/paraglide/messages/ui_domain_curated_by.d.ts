export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Curated_ByInputs = {
    author: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "curated by {author}" |
*
* @param {Ui_Domain_Curated_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_curated_by: ((inputs: Ui_Domain_Curated_ByInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Curated_ByInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

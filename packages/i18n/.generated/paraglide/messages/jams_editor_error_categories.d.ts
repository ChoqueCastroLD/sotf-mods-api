export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Error_CategoriesInputs = {};
/**
* | output |
* | --- |
* | "Each category needs a unique key (lowercase letters, digits, hyphens; 2 to 31 characters)." |
*
* @param {Jams_Editor_Error_CategoriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_error_categories: ((inputs?: Jams_Editor_Error_CategoriesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_CategoriesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

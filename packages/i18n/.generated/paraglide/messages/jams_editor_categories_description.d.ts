export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Categories_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Each category is rated 1 to 5 stars. The weight sets how much it counts towards the overall score." |
*
* @param {Jams_Editor_Categories_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_categories_description: ((inputs?: Jams_Editor_Categories_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Categories_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

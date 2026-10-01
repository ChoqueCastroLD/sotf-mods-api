export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Meta_Viewer_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "A shared game log. The private link deletes itself after 24 hours." |
*
* @param {Logs_Meta_Viewer_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_meta_viewer_description: ((inputs?: Logs_Meta_Viewer_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Meta_Viewer_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

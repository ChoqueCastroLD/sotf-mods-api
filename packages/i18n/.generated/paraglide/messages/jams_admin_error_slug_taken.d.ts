export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Admin_Error_Slug_TakenInputs = {};
/**
* | output |
* | --- |
* | "That address is already used by another jam." |
*
* @param {Jams_Admin_Error_Slug_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_admin_error_slug_taken: ((inputs?: Jams_Admin_Error_Slug_TakenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Error_Slug_TakenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

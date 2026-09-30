export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Admin_Error_SlugInputs = {};
/**
* | output |
* | --- |
* | "Use at least 3 lowercase letters, digits or hyphens." |
*
* @param {Jams_Admin_Error_SlugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_admin_error_slug: ((inputs?: Jams_Admin_Error_SlugInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Error_SlugInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

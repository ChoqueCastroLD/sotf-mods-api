export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Delete_Point_GraceInputs = {};
/**
* | output |
* | --- |
* | "You have 14 days to change your mind; signing in and cancelling here stops it." |
*
* @param {Settings_Delete_Point_GraceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_delete_point_grace: ((inputs?: Settings_Delete_Point_GraceInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Point_GraceInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

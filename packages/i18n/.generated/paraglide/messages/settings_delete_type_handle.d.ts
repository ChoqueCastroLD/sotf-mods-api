export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Delete_Type_HandleInputs = {
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Type «{handle}» exactly to confirm." |
*
* @param {Settings_Delete_Type_HandleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_delete_type_handle: ((inputs: Settings_Delete_Type_HandleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Type_HandleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

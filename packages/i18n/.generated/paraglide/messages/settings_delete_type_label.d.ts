export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Delete_Type_LabelInputs = {
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Type your handle «{handle}» to confirm" |
*
* @param {Settings_Delete_Type_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_delete_type_label: ((inputs: Settings_Delete_Type_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Type_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Display_Name_LengthInputs = {
    min: NonNullable<unknown>;
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Use between {min__number} and {max__number} characters." |
*
* @param {Settings_Display_Name_LengthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_display_name_length: ((inputs: Settings_Display_Name_LengthInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Display_Name_LengthInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

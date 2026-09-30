export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Crop_HelpInputs = {};
/**
* | output |
* | --- |
* | "Drag the image or use the arrow keys to move it; use the slider or + and − to zoom." |
*
* @param {Settings_Crop_HelpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_crop_help: ((inputs?: Settings_Crop_HelpInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_HelpInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

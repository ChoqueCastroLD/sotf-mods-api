export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Template_Text_ErrorInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Write the text (up to {max__number} characters)." |
*
* @param {Settings_Template_Text_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_template_text_error: ((inputs: Settings_Template_Text_ErrorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_Text_ErrorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

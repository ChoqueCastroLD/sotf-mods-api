export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Templates_TextInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up to {max__number} ready-made answers (installation steps, known conflicts…) to copy into comments and review replies." |
*
* @param {Settings_Templates_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_templates_text: ((inputs: Settings_Templates_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Templates_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

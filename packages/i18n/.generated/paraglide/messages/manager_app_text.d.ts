export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_App_TextInputs = {};
/**
* | output |
* | --- |
* | "If RedLoader is missing, the manager installs it first. Then it downloads the mod and its libraries into the right folders, and warns you if the mod clashes ..." |
*
* @param {Manager_App_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_app_text: ((inputs?: Manager_App_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_App_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

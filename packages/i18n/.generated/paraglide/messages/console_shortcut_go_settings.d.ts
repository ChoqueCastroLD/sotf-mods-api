export type LocalizedString = import('../runtime.js').LocalizedString;
export type Console_Shortcut_Go_SettingsInputs = {};
/**
* | output |
* | --- |
* | "Go to Settings" |
*
* @param {Console_Shortcut_Go_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const console_shortcut_go_settings: ((inputs?: Console_Shortcut_Go_SettingsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Go_SettingsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Console_Shortcuts_DisabledInputs = {};
/**
* | output |
* | --- |
* | "Shortcuts are off. Turn them on in Settings → Preferences." |
*
* @param {Console_Shortcuts_DisabledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const console_shortcuts_disabled: ((inputs?: Console_Shortcuts_DisabledInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcuts_DisabledInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

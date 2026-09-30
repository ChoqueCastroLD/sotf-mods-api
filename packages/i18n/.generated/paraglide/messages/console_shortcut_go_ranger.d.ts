export type LocalizedString = import('../runtime.js').LocalizedString;
export type Console_Shortcut_Go_RangerInputs = {};
/**
* | output |
* | --- |
* | "Go to the Ranger Station" |
*
* @param {Console_Shortcut_Go_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const console_shortcut_go_ranger: ((inputs?: Console_Shortcut_Go_RangerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Go_RangerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

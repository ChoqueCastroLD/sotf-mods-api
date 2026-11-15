export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Crash_TextInputs = {};
/**
* | output |
* | --- |
* | "When the game crashes, the manager comes to the front and offers the RedLoader and game logs, so you can find the mod that caused it." |
*
* @param {Manager_Crash_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_crash_text: ((inputs?: Manager_Crash_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Crash_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

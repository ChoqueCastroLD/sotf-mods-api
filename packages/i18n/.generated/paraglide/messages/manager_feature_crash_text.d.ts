export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Feature_Crash_TextInputs = {};
/**
* | output |
* | --- |
* | "If the game crashes, the manager opens the logs so you can find the mod that caused it." |
*
* @param {Manager_Feature_Crash_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_feature_crash_text: ((inputs?: Manager_Feature_Crash_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Crash_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Step_1Inputs = {};
/**
* | output |
* | --- |
* | "Download SotfModsManager.exe and open it. It finds your game through Steam." |
*
* @param {Manager_Step_1Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_step_1: ((inputs?: Manager_Step_1Inputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Step_1Inputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

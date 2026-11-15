export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Shot_MainInputs = {};
/**
* | output |
* | --- |
* | "SotF Mods Manager listing the mods of SOTF Mods, with Axel's Mod Menu selected" |
*
* @param {Manager_Shot_MainInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_shot_main: ((inputs?: Manager_Shot_MainInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_MainInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

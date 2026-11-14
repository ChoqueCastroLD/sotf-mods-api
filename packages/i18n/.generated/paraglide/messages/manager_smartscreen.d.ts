export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_SmartscreenInputs = {};
/**
* | output |
* | --- |
* | "Windows SmartScreen may warn you the first time because the exe is not signed: click More info, then Run anyway. The source code is public on GitHub." |
*
* @param {Manager_SmartscreenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_smartscreen: ((inputs?: Manager_SmartscreenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_SmartscreenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

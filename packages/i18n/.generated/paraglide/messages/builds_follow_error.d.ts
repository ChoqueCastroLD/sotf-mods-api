export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Follow_ErrorInputs = {};
/**
* | output |
* | --- |
* | "Couldn’t update your Backpack. Check your connection and try again." |
*
* @param {Builds_Follow_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_follow_error: ((inputs?: Builds_Follow_ErrorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Follow_ErrorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

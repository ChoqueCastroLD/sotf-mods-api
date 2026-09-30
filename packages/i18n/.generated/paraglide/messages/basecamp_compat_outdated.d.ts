export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Compat_OutdatedInputs = {};
/**
* | output |
* | --- |
* | "Possibly outdated: the game changed since the last version." |
*
* @param {Basecamp_Compat_OutdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_compat_outdated: ((inputs?: Basecamp_Compat_OutdatedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_OutdatedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

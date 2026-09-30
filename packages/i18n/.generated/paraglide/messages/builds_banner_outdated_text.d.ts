export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Banner_Outdated_TextInputs = {};
/**
* | output |
* | --- |
* | "This build hasn’t been updated in a long time. It may not place correctly on the current patch." |
*
* @param {Builds_Banner_Outdated_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_banner_outdated_text: ((inputs?: Builds_Banner_Outdated_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Outdated_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

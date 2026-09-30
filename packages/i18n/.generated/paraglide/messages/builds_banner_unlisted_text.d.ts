export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Banner_Unlisted_TextInputs = {};
/**
* | output |
* | --- |
* | "This build is hidden from listings and search. Anyone with the link can still open it." |
*
* @param {Builds_Banner_Unlisted_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_banner_unlisted_text: ((inputs?: Builds_Banner_Unlisted_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Unlisted_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

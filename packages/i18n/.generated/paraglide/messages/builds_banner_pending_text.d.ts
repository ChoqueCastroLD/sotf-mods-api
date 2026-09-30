export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Banner_Pending_TextInputs = {};
/**
* | output |
* | --- |
* | "A ranger will check this build soon. Until then it stays out of listings and search." |
*
* @param {Builds_Banner_Pending_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_banner_pending_text: ((inputs?: Builds_Banner_Pending_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Pending_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

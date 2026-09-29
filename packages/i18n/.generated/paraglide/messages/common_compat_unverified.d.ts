export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Compat_UnverifiedInputs = {};
/**
* | output |
* | --- |
* | "Not verified on the latest patch yet. Tried it? Report back." |
*
* @param {Common_Compat_UnverifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_compat_unverified: ((inputs?: Common_Compat_UnverifiedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Compat_UnverifiedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

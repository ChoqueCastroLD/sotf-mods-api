export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Compat_Incompatible_FailedInputs = {};
/**
* | output |
* | --- |
* | "Could not save the incompatible mods." |
*
* @param {Basecamp_Compat_Incompatible_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_compat_incompatible_failed: ((inputs?: Basecamp_Compat_Incompatible_FailedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_FailedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

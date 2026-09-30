export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Compat_Tested_HintInputs = {};
/**
* | output |
* | --- |
* | "The builds you tested each version on. Players see them next to the field reports." |
*
* @param {Basecamp_Compat_Tested_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_compat_tested_hint: ((inputs?: Basecamp_Compat_Tested_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Tested_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Spec_BuildshareInputs = {};
/**
* | output |
* | --- |
* | "BuildShare version" |
*
* @param {Builds_Spec_BuildshareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_spec_buildshare: ((inputs?: Builds_Spec_BuildshareInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_BuildshareInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Incompatibility_DependencyInputs = {};
/**
* | output |
* | --- |
* | "A dependency of this mod cannot also be incompatible with it." |
*
* @param {Upload_Preflight_Incompatibility_DependencyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_incompatibility_dependency: ((inputs?: Upload_Preflight_Incompatibility_DependencyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Incompatibility_DependencyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

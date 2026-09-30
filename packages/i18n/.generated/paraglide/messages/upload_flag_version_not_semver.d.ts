export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_Version_Not_SemverInputs = {};
/**
* | output |
* | --- |
* | "The version is not a semantic version (x.y.z)." |
*
* @param {Upload_Flag_Version_Not_SemverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_version_not_semver: ((inputs?: Upload_Flag_Version_Not_SemverInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Version_Not_SemverInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

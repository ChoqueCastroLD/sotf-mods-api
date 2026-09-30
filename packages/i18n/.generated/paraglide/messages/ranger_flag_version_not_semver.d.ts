export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Flag_Version_Not_SemverInputs = {};
/**
* | output |
* | --- |
* | "Version is not semantic (x.y.z)" |
*
* @param {Ranger_Flag_Version_Not_SemverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_flag_version_not_semver: ((inputs?: Ranger_Flag_Version_Not_SemverInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Version_Not_SemverInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Flag_Version_Not_GreaterInputs = {};
/**
* | output |
* | --- |
* | "Version is not newer than the last one" |
*
* @param {Ranger_Flag_Version_Not_GreaterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_flag_version_not_greater: ((inputs?: Ranger_Flag_Version_Not_GreaterInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Version_Not_GreaterInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

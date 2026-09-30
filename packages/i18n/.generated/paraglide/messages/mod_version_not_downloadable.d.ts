export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Version_Not_DownloadableInputs = {};
/**
* | output |
* | --- |
* | "This version can’t be downloaded." |
*
* @param {Mod_Version_Not_DownloadableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_version_not_downloadable: ((inputs?: Mod_Version_Not_DownloadableInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Not_DownloadableInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

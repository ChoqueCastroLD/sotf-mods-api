export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_Err_Not_ZipInputs = {};
/**
* | output |
* | --- |
* | "This is not a zip file." |
*
* @param {Modpacks_Configs_Err_Not_ZipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_err_not_zip: ((inputs?: Modpacks_Configs_Err_Not_ZipInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_Not_ZipInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

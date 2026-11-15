export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_Err_DuplicateInputs = {};
/**
* | output |
* | --- |
* | "The same file is in the zip twice." |
*
* @param {Modpacks_Configs_Err_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_err_duplicate: ((inputs?: Modpacks_Configs_Err_DuplicateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_DuplicateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

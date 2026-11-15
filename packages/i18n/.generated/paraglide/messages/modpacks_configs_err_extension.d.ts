export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_Err_ExtensionInputs = {};
/**
* | output |
* | --- |
* | "Only config files are allowed: cfg, toml, json, ini, txt, xml and yml." |
*
* @param {Modpacks_Configs_Err_ExtensionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_err_extension: ((inputs?: Modpacks_Configs_Err_ExtensionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_ExtensionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

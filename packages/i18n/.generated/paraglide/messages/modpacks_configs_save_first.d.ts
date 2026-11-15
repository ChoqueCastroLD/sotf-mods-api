export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_Save_FirstInputs = {};
/**
* | output |
* | --- |
* | "Save the modpack first, then add its config files." |
*
* @param {Modpacks_Configs_Save_FirstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_save_first: ((inputs?: Modpacks_Configs_Save_FirstInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Save_FirstInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Ship your mod settings with the modpack. Zip the files with their folders as they are in the game folder, for example UserData/AxelsModMenu.cfg. SotF Mods Ma..." |
*
* @param {Modpacks_Configs_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_description: ((inputs?: Modpacks_Configs_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Redloader_Not_BepinexInputs = {};
/**
* | output |
* | --- |
* | "This mod needs RedLoader, not BepInEx. BepInEx mods and guides don’t apply to Sons of the Forest." |
*
* @param {Mod_Install_Redloader_Not_BepinexInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_redloader_not_bepinex: ((inputs?: Mod_Install_Redloader_Not_BepinexInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Redloader_Not_BepinexInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

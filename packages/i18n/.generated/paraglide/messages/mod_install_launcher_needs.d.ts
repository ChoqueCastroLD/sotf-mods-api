export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Launcher_NeedsInputs = {};
/**
* | output |
* | --- |
* | "Needs SotF Mods Manager" |
*
* @param {Mod_Install_Launcher_NeedsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_launcher_needs: ((inputs?: Mod_Install_Launcher_NeedsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Launcher_NeedsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Step_Loader_LinkInputs = {};
/**
* | output |
* | --- |
* | "How to install RedLoader" |
*
* @param {Mod_Install_Step_Loader_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_step_loader_link: ((inputs?: Mod_Install_Step_Loader_LinkInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Loader_LinkInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

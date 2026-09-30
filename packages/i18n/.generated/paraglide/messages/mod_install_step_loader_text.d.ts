export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Step_Loader_TextInputs = {};
/**
* | output |
* | --- |
* | "RedLoader is the mod loader of Sons of the Forest. Install it once and every mod works." |
*
* @param {Mod_Install_Step_Loader_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_step_loader_text: ((inputs?: Mod_Install_Step_Loader_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Loader_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Step_Launch_TextInputs = {};
/**
* | output |
* | --- |
* | "RedLoader loads the mod on start. Press F1 in the main menu to see the list of mods." |
*
* @param {Mod_Install_Step_Launch_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_step_launch_text: ((inputs?: Mod_Install_Step_Launch_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Launch_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

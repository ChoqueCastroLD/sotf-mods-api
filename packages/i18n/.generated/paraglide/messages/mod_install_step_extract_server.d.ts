export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Step_Extract_ServerInputs = {};
/**
* | output |
* | --- |
* | "On a dedicated server, extract it into the server’s Mods folder:" |
*
* @param {Mod_Install_Step_Extract_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_step_extract_server: ((inputs?: Mod_Install_Step_Extract_ServerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Extract_ServerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

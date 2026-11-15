export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_Page_TextInputs = {};
/**
* | output |
* | --- |
* | "Settings the modpack author uses for these mods. SotF Mods Manager copies them into your game folder when you install the modpack." |
*
* @param {Modpacks_Configs_Page_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_page_text: ((inputs?: Modpacks_Configs_Page_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Page_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

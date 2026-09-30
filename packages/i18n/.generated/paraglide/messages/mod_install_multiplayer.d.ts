export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_MultiplayerInputs = {
    role: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Multiplayer: {role}." |
*
* @param {Mod_Install_MultiplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_multiplayer: ((inputs: Mod_Install_MultiplayerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_MultiplayerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

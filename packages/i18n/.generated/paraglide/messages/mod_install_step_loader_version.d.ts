export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Step_Loader_VersionInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Use RedLoader {version} or newer." |
*
* @param {Mod_Install_Step_Loader_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_step_loader_version: ((inputs: Mod_Install_Step_Loader_VersionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Loader_VersionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

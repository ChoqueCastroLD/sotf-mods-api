export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Other_LoaderInputs = {
    loader: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "This mod is made for {loader}. Install it with the instructions in the description; RedManager does not install it." |
*
* @param {Mod_Install_Other_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_other_loader: ((inputs: Mod_Install_Other_LoaderInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Other_LoaderInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

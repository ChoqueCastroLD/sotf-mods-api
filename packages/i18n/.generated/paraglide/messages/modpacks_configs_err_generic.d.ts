export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_Err_GenericInputs = {};
/**
* | output |
* | --- |
* | "The config files couldn't be saved. Try again." |
*
* @param {Modpacks_Configs_Err_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_err_generic: ((inputs?: Modpacks_Configs_Err_GenericInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_GenericInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

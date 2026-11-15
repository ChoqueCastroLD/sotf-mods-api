export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_Err_OutsideInputs = {};
/**
* | output |
* | --- |
* | "Every file must be inside the UserData or Mods folder." |
*
* @param {Modpacks_Configs_Err_OutsideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_err_outside: ((inputs?: Modpacks_Configs_Err_OutsideInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_OutsideInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

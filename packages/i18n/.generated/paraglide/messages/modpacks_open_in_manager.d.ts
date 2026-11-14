export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Open_In_ManagerInputs = {};
/**
* | output |
* | --- |
* | "Open in SotF Mods Manager" |
*
* @param {Modpacks_Open_In_ManagerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_open_in_manager: ((inputs?: Modpacks_Open_In_ManagerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Open_In_ManagerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

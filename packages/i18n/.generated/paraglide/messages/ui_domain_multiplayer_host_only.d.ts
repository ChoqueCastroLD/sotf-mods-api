export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Multiplayer_Host_OnlyInputs = {};
/**
* | output |
* | --- |
* | "Host only" |
*
* @param {Ui_Domain_Multiplayer_Host_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_multiplayer_host_only: ((inputs?: Ui_Domain_Multiplayer_Host_OnlyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Multiplayer_Host_OnlyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

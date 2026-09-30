export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Md_Alert_CautionInputs = {};
/**
* | output |
* | --- |
* | "Caution" |
*
* @param {Mod_Md_Alert_CautionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_md_alert_caution: ((inputs?: Mod_Md_Alert_CautionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Md_Alert_CautionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Checks_Manifest_OkInputs = {};
/**
* | output |
* | --- |
* | "manifest.json valid" |
*
* @param {Ranger_Checks_Manifest_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_checks_manifest_ok: ((inputs?: Ranger_Checks_Manifest_OkInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_Manifest_OkInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

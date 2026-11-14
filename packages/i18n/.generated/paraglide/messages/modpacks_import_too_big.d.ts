export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Import_Too_BigInputs = {};
/**
* | output |
* | --- |
* | "The file is larger than 256 KB." |
*
* @param {Modpacks_Import_Too_BigInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_import_too_big: ((inputs?: Modpacks_Import_Too_BigInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Import_Too_BigInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Import_Step1_TextInputs = {};
/**
* | output |
* | --- |
* | "BuildShare is the mod that places builds. It runs on RedLoader: if you have never installed a mod, follow the install guide first." |
*
* @param {Builds_Import_Step1_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_import_step1_text: ((inputs?: Builds_Import_Step1_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step1_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

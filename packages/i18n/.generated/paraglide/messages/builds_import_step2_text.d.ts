export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Import_Step2_TextInputs = {};
/**
* | output |
* | --- |
* | "Download the .json above and copy it into this folder of your game:" |
*
* @param {Builds_Import_Step2_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_import_step2_text: ((inputs?: Builds_Import_Step2_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step2_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

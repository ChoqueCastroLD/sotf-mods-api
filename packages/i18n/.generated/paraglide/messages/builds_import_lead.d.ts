export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Import_LeadInputs = {};
/**
* | output |
* | --- |
* | "A build is a BuildShare blueprint: one .json file that you drop into your game and place like a prefab." |
*
* @param {Builds_Import_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_import_lead: ((inputs?: Builds_Import_LeadInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_LeadInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

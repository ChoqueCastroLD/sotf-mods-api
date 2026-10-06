export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Import_LeadInputs = {};
/**
* | output |
* | --- |
* | "A build is a single .json file for the BuildShare mod. Copy it into your game folder and place it in the game." |
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

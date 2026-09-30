export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Template_Broken_Or_EmptyInputs = {};
/**
* | output |
* | --- |
* | "The file is broken, empty or does not load with RedLoader." |
*
* @param {Ranger_Template_Broken_Or_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_template_broken_or_empty: ((inputs?: Ranger_Template_Broken_Or_EmptyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Broken_Or_EmptyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

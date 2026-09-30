export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Template_Rules_ViolationInputs = {};
/**
* | output |
* | --- |
* | "Removed for breaking the site rules." |
*
* @param {Ranger_Template_Rules_ViolationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_template_rules_violation: ((inputs?: Ranger_Template_Rules_ViolationInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Rules_ViolationInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

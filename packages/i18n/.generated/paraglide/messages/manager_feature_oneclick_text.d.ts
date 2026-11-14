export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Feature_Oneclick_TextInputs = {};
/**
* | output |
* | --- |
* | "Click «Install with SotF Mods Manager» on any mod page and the manager downloads it with its dependencies." |
*
* @param {Manager_Feature_Oneclick_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_feature_oneclick_text: ((inputs?: Manager_Feature_Oneclick_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Oneclick_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

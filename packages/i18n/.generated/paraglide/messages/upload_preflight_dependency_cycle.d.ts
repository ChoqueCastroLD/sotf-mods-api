export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Dependency_CycleInputs = {};
/**
* | output |
* | --- |
* | "Dependencies form a loop." |
*
* @param {Upload_Preflight_Dependency_CycleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_dependency_cycle: ((inputs?: Upload_Preflight_Dependency_CycleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Dependency_CycleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

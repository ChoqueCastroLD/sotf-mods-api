export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Dependency_Kind_OptionalInputs = {};
/**
* | output |
* | --- |
* | "Optional" |
*
* @param {Ui_Domain_Dependency_Kind_OptionalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_dependency_kind_optional: ((inputs?: Ui_Domain_Dependency_Kind_OptionalInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependency_Kind_OptionalInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

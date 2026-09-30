export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Dependency_Kind_ConflictsInputs = {};
/**
* | output |
* | --- |
* | "Conflicts with" |
*
* @param {Ui_Domain_Dependency_Kind_ConflictsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_dependency_kind_conflicts: ((inputs?: Ui_Domain_Dependency_Kind_ConflictsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependency_Kind_ConflictsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

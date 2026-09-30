export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_CountsInputs = {
    visible: NonNullable<unknown>;
    total: NonNullable<unknown>;
    selected: NonNullable<unknown>;
};
/**
* | visible__plural | output |
* | --- | --- |
* | "one" | "{visible__number} row shown of {total} · {selected} selected" |
* | * | "{visible__number} rows shown of {total} · {selected} selected" |
*
* @param {Admin_Recat_CountsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_counts: ((inputs: Admin_Recat_CountsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_CountsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

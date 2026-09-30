export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Dependency_Add_AsInputs = {
    name: NonNullable<unknown>;
    kind: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Add {name} as {kind}" |
*
* @param {Upload_Dependency_Add_AsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_dependency_add_as: ((inputs: Upload_Dependency_Add_AsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_Add_AsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

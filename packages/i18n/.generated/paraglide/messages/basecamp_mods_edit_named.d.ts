export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Mods_Edit_NamedInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Edit {name}" |
*
* @param {Basecamp_Mods_Edit_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_mods_edit_named: ((inputs: Basecamp_Mods_Edit_NamedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Edit_NamedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

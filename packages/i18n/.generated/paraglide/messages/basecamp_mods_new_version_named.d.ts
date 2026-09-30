export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Mods_New_Version_NamedInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "New version of {name}" |
*
* @param {Basecamp_Mods_New_Version_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_mods_new_version_named: ((inputs: Basecamp_Mods_New_Version_NamedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_New_Version_NamedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

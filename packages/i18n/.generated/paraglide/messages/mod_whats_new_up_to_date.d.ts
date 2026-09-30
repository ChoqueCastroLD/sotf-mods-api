export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Whats_New_Up_To_DateInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You have the latest version (v{version})." |
*
* @param {Mod_Whats_New_Up_To_DateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_whats_new_up_to_date: ((inputs: Mod_Whats_New_Up_To_DateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Whats_New_Up_To_DateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

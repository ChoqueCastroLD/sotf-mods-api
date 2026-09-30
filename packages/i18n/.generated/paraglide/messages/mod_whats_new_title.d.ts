export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Whats_New_TitleInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "What’s new since your last download (v{version})" |
*
* @param {Mod_Whats_New_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_whats_new_title: ((inputs: Mod_Whats_New_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Whats_New_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

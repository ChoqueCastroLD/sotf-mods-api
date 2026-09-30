export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Deps_Sheet_TitleInputs = {
    names: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You also need {names}" |
*
* @param {Mod_Deps_Sheet_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_deps_sheet_title: ((inputs: Mod_Deps_Sheet_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Deps_Sheet_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

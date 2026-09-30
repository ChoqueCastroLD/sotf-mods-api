export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Deps_Sheet_TextInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} doesn’t work without these mods. Download them too, or continue if you already have them." |
*
* @param {Mod_Deps_Sheet_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_deps_sheet_text: ((inputs: Mod_Deps_Sheet_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Deps_Sheet_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Versions_CaptionInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Versions of {name}" |
*
* @param {Mod_Versions_CaptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_versions_caption: ((inputs: Mod_Versions_CaptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_CaptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Unapprove_TitleInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Unapprove {name}?" |
*
* @param {Mod_Unapprove_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_unapprove_title: ((inputs: Mod_Unapprove_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Unapprove_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

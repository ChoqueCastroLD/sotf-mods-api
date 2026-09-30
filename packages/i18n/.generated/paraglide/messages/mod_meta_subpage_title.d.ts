export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Meta_Subpage_TitleInputs = {
    page: NonNullable<unknown>;
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{page} · {name}" |
*
* @param {Mod_Meta_Subpage_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_meta_subpage_title: ((inputs: Mod_Meta_Subpage_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_Subpage_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

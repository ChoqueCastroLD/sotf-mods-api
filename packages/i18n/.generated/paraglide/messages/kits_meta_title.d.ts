export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Meta_TitleInputs = {
    name: NonNullable<unknown>;
    curator: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} — mod kit by {curator}" |
*
* @param {Kits_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_meta_title: ((inputs: Kits_Meta_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Meta_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

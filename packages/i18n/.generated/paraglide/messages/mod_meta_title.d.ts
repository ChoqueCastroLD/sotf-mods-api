export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Meta_TitleInputs = {
    name: NonNullable<unknown>;
    kind: NonNullable<unknown>;
    author: NonNullable<unknown>;
};
/**
* | kind | output |
* | --- | --- |
* | "library" | "{name}: Sons of the Forest library by {author}" |
* | * | "{name}: Sons of the Forest mod by {author}" |
*
* @param {Mod_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_meta_title: ((inputs: Mod_Meta_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

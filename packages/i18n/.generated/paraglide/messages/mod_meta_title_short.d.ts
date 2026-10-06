export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Meta_Title_ShortInputs = {
    name: NonNullable<unknown>;
    kind: NonNullable<unknown>;
};
/**
* | kind | output |
* | --- | --- |
* | "library" | "{name}: Sons of the Forest library" |
* | * | "{name}: Sons of the Forest mod" |
*
* @param {Mod_Meta_Title_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_meta_title_short: ((inputs: Mod_Meta_Title_ShortInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_Title_ShortInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

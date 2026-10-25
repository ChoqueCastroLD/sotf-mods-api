export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Meta_TitleInputs = {
    name: NonNullable<unknown>;
    game: NonNullable<unknown>;
    kind: NonNullable<unknown>;
    author: NonNullable<unknown>;
};
/**
* | kind | output |
* | --- | --- |
* | "library" | "{name}: {game} library by {author}" |
* | * | "{name}: {game} mod by {author}" |
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

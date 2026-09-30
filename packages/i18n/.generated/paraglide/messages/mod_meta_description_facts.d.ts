export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Meta_Description_FactsInputs = {
    name: NonNullable<unknown>;
    kind: NonNullable<unknown>;
    author: NonNullable<unknown>;
    count: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
};
/**
* | kind | count__plural | output |
* | --- | --- | --- |
* | "library" | "one" | "{name} is a Sons of the Forest library by {author} for RedLoader. {downloads} download, free and direct." |
* | "library" | * | "{name} is a Sons of the Forest library by {author} for RedLoader. {downloads} downloads, free and direct." |
* | * | "one" | "{name} is a Sons of the Forest mod by {author} for RedLoader. {downloads} download, free and direct." |
* | * | * | "{name} is a Sons of the Forest mod by {author} for RedLoader. {downloads} downloads, free and direct." |
*
* @param {Mod_Meta_Description_FactsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_meta_description_facts: ((inputs: Mod_Meta_Description_FactsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_Description_FactsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

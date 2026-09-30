export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Meta_Description_FactsInputs = {
    name: NonNullable<unknown>;
    author: NonNullable<unknown>;
    pieceCount: NonNullable<unknown>;
    pieces: NonNullable<unknown>;
    count: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
};
/**
* | pieceCount__plural | count__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{name}: a Sons of the Forest build by {author} for BuildShare, {pieces} piece. {downloads} download, free, with import steps." |
* | "one" | * | "{name}: a Sons of the Forest build by {author} for BuildShare, {pieces} piece. {downloads} downloads, free, with import steps." |
* | * | "one" | "{name}: a Sons of the Forest build by {author} for BuildShare, {pieces} pieces. {downloads} download, free, with import steps." |
* | * | * | "{name}: a Sons of the Forest build by {author} for BuildShare, {pieces} pieces. {downloads} downloads, free, with import steps." |
*
* @param {Builds_Meta_Description_FactsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_meta_description_facts: ((inputs: Builds_Meta_Description_FactsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Meta_Description_FactsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

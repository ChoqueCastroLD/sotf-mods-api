export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Meta_Description_FallbackInputs = {
    name: NonNullable<unknown>;
    author: NonNullable<unknown>;
    count: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: a Sons of the Forest build by {author} for BuildShare. {downloads} download, free, with import steps." |
* | * | "{name}: a Sons of the Forest build by {author} for BuildShare. {downloads} downloads, free, with import steps." |
*
* @param {Builds_Meta_Description_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_meta_description_fallback: ((inputs: Builds_Meta_Description_FallbackInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Meta_Description_FallbackInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Bundles_MetaInputs = {
    files: NonNullable<unknown>;
    size: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{files} files · {size} · {downloads} downloads" |
*
* @param {Bundles_MetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const bundles_meta: ((inputs: Bundles_MetaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_MetaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

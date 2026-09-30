export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_MetaInputs = {
    date: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
    size: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{date} · {downloads} downloads · {size}" |
*
* @param {Basecamp_Versions_MetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_meta: ((inputs: Basecamp_Versions_MetaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_MetaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

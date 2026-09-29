export type LocalizedString = import('../runtime.js').LocalizedString;
export type Meta_Home_DescriptionInputs = {
    mods: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Download {mods} Sons of the Forest mods, builds and kits for RedLoader: free, direct and field-tested by the community. {downloads} downloads as of {date}." |
*
* @param {Meta_Home_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const meta_home_description: ((inputs: Meta_Home_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Home_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

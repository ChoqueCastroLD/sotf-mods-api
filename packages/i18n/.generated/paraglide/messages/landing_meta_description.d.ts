export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Meta_DescriptionInputs = {
    count: NonNullable<unknown>;
    mods: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Download {mods} Sons of the Forest mod and builds for RedLoader. Free direct downloads with ratings and comments from the community." |
* | * | "Download {mods} Sons of the Forest mods and builds for RedLoader. Free direct downloads with ratings and comments from the community." |
*
* @param {Landing_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_meta_description: ((inputs: Landing_Meta_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Meta_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

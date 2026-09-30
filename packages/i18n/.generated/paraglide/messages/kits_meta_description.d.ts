export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Meta_DescriptionInputs = {
    name: NonNullable<unknown>;
    curator: NonNullable<unknown>;
    count: NonNullable<unknown>;
    mods: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: a Sons of the Forest mod kit by {curator} with {count__number} item ({mods}). Dependencies included, free direct downloads." |
* | * | "{name}: a Sons of the Forest mod kit by {curator} with {count__number} items ({mods}). Dependencies included, free direct downloads." |
*
* @param {Kits_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_meta_description: ((inputs: Kits_Meta_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Meta_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

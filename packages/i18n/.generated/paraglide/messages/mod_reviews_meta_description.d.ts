export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Reviews_Meta_DescriptionInputs = {
    name: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Player reviews of {name}, a Sons of the Forest mod: {count__number} review with ratings, verified downloads and creator replies." |
* | * | "Player reviews of {name}, a Sons of the Forest mod: {count__number} reviews with ratings, verified downloads and creator replies." |
*
* @param {Mod_Reviews_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_reviews_meta_description: ((inputs: Mod_Reviews_Meta_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_Meta_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Detail_DescriptionInputs = {
    name: NonNullable<unknown>;
    author: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name} by {author}: {count__number} mod for Sons of the Forest. Download it and install everything with SotF Mods Manager." |
* | * | "{name} by {author}: {count__number} mods for Sons of the Forest. Download it and install everything with SotF Mods Manager." |
*
* @param {Modpacks_Detail_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_detail_description: ((inputs: Modpacks_Detail_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Detail_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

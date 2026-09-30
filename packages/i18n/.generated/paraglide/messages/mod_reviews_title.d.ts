export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Reviews_TitleInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Reviews" |
* | * | "one" | "{count__number} review" |
* | * | * | "{count__number} reviews" |
*
* @param {Mod_Reviews_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_reviews_title: ((inputs: Mod_Reviews_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

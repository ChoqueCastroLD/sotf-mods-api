export type LocalizedString = import('../runtime.js').LocalizedString;
export type Entity_Reviews_See_AllInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Be the first to review" |
* | * | "one" | "Open 1 review" |
* | * | * | "Open all {count__number} reviews" |
*
* @param {Entity_Reviews_See_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const entity_reviews_see_all: ((inputs: Entity_Reviews_See_AllInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Reviews_See_AllInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

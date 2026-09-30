export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Creator_PublishedInputs = {
    actor: NonNullable<unknown>;
    kind: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | kind | output |
* | --- | --- |
* | "build" | "{actor} published the build {mod}" |
* | * | "{actor} published {mod}" |
*
* @param {Signals_Creator_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_creator_published: ((inputs: Signals_Creator_PublishedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Creator_PublishedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

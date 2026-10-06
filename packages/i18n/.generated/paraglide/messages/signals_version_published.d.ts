export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Version_PublishedInputs = {
    mod: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} {version} was released" |
*
* @param {Signals_Version_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_version_published: ((inputs: Signals_Version_PublishedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Version_PublishedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

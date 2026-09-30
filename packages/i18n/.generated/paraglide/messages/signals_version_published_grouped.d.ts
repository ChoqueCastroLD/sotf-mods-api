export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Version_Published_GroupedInputs = {
    count: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new version of {mod}" |
* | * | "{count__number} new versions of {mod}" |
*
* @param {Signals_Version_Published_GroupedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_version_published_grouped: ((inputs: Signals_Version_Published_GroupedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Version_Published_GroupedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_CounterInputs = {
    count: NonNullable<unknown>;
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{count} / {max}" |
*
* @param {Basecamp_CounterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_counter: ((inputs: Basecamp_CounterInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_CounterInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

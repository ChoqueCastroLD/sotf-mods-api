export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Review_On_ModInputs = {
    actor: NonNullable<unknown>;
    rating: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} left a {rating}-star review on {mod}" |
*
* @param {Signals_Review_On_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_review_on_mod: ((inputs: Signals_Review_On_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Review_On_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

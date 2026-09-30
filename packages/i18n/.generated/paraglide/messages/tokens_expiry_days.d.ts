export type LocalizedString = import('../runtime.js').LocalizedString;
export type Tokens_Expiry_DaysInputs = {
    days: NonNullable<unknown>;
};
/**
* | days__plural | output |
* | --- | --- |
* | "one" | "{days__number} day" |
* | * | "{days__number} days" |
*
* @param {Tokens_Expiry_DaysInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const tokens_expiry_days: ((inputs: Tokens_Expiry_DaysInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Expiry_DaysInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Kelvin_Chart_DescriptionInputs = {
    cost: NonNullable<unknown>;
    tokensIn: NonNullable<unknown>;
    tokensOut: NonNullable<unknown>;
    over: NonNullable<unknown>;
};
/**
* | over__exact | over__plural | output |
* | --- | --- | --- |
* | "0" | * | "{cost} in total · {tokensIn} tokens in, {tokensOut} out · never over budget" |
* | * | "one" | "{cost} in total · {tokensIn} tokens in, {tokensOut} out · {over__number} day over budget" |
* | * | * | "{cost} in total · {tokensIn} tokens in, {tokensOut} out · {over__number} days over budget" |
*
* @param {Admin_Kelvin_Chart_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_kelvin_chart_description: ((inputs: Admin_Kelvin_Chart_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Chart_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

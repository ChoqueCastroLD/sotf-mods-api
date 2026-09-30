export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Kit_Updated_FollowedInputs = {
    kit: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The kit “{kit}” you follow was updated" |
*
* @param {Signals_Kit_Updated_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_kit_updated_followed: ((inputs: Signals_Kit_Updated_FollowedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Kit_Updated_FollowedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

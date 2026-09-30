export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Kit_AlreadyInputs = {
    kit: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Already in {kit}" |
*
* @param {Builds_Kit_AlreadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_kit_already: ((inputs: Builds_Kit_AlreadyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Kit_AlreadyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

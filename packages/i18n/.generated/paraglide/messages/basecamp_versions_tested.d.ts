export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_TestedInputs = {
    builds: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Tested on: {builds}" |
*
* @param {Basecamp_Versions_TestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_tested: ((inputs: Basecamp_Versions_TestedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_TestedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

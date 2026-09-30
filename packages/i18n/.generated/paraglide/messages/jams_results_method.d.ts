export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Results_MethodInputs = {
    min: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Scores are Bayesian averages. An entry needs at least {min} votes to be ranked." |
*
* @param {Jams_Results_MethodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_results_method: ((inputs: Jams_Results_MethodInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_MethodInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

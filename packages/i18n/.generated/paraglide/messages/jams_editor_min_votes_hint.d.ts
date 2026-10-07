export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Min_Votes_HintInputs = {};
/**
* | output |
* | --- |
* | "An entry needs this many valid votes to be ranked." |
*
* @param {Jams_Editor_Min_Votes_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_min_votes_hint: ((inputs?: Jams_Editor_Min_Votes_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Min_Votes_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

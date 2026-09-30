export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Results_AtInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Last computed {date}." |
*
* @param {Jams_Editor_Results_AtInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_results_at: ((inputs: Jams_Editor_Results_AtInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Results_AtInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

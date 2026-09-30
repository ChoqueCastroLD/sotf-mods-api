export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Entries_Disqualify_TitleInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Disqualify \"{name}\"?" |
*
* @param {Jams_Entries_Disqualify_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_entries_disqualify_title: ((inputs: Jams_Entries_Disqualify_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Disqualify_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

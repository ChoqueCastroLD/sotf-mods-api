export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Entries_ExcludedInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Excluded: {count}" |
*
* @param {Jams_Entries_ExcludedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_entries_excluded: ((inputs: Jams_Entries_ExcludedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_ExcludedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

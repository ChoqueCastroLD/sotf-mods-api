export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Booth_Entry_OfInputs = {
    current: NonNullable<unknown>;
    total: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Entry {current} of {total}" |
*
* @param {Jams_Booth_Entry_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_booth_entry_of: ((inputs: Jams_Booth_Entry_OfInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_Entry_OfInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

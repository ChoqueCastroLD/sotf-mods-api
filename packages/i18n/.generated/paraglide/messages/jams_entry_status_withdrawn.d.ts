export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Entry_Status_WithdrawnInputs = {};
/**
* | output |
* | --- |
* | "Withdrawn" |
*
* @param {Jams_Entry_Status_WithdrawnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_entry_status_withdrawn: ((inputs?: Jams_Entry_Status_WithdrawnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_Status_WithdrawnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

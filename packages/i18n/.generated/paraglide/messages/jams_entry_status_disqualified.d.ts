export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Entry_Status_DisqualifiedInputs = {};
/**
* | output |
* | --- |
* | "Disqualified" |
*
* @param {Jams_Entry_Status_DisqualifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_entry_status_disqualified: ((inputs?: Jams_Entry_Status_DisqualifiedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_Status_DisqualifiedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

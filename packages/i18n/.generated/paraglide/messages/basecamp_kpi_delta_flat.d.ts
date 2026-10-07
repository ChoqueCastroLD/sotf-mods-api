export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Kpi_Delta_FlatInputs = {};
/**
* | output |
* | --- |
* | "No change on the previous period" |
*
* @param {Basecamp_Kpi_Delta_FlatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_kpi_delta_flat: ((inputs?: Basecamp_Kpi_Delta_FlatInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Delta_FlatInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

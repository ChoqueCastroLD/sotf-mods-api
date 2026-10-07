export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Kpi_Delta_UpInputs = {
    percent: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up {percent} on the previous period" |
*
* @param {Basecamp_Kpi_Delta_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_kpi_delta_up: ((inputs: Basecamp_Kpi_Delta_UpInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Delta_UpInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

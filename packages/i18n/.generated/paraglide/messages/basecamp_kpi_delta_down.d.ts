export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Kpi_Delta_DownInputs = {
    percent: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Down {percent} on the previous period" |
*
* @param {Basecamp_Kpi_Delta_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_kpi_delta_down: ((inputs: Basecamp_Kpi_Delta_DownInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Delta_DownInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

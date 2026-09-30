export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Legacy_DeviationsInputs = {};
/**
* | output |
* | --- |
* | "Intentional differences from the old behaviour" |
*
* @param {Content_Dev_Legacy_DeviationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_legacy_deviations: ((inputs?: Content_Dev_Legacy_DeviationsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_DeviationsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

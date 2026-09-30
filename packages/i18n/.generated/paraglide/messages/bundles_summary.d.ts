export type LocalizedString = import('../runtime.js').LocalizedString;
export type Bundles_SummaryInputs = {
    kit: NonNullable<unknown>;
    files: NonNullable<unknown>;
    size: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{kit}: {files} files, {size}" |
*
* @param {Bundles_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const bundles_summary: ((inputs: Bundles_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

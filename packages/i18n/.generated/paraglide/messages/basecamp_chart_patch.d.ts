export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Chart_PatchInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Patch {label}" |
*
* @param {Basecamp_Chart_PatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_chart_patch: ((inputs: Basecamp_Chart_PatchInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Chart_PatchInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

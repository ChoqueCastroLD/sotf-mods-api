export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_Scan_DetectionsInputs = {
    positives: NonNullable<unknown>;
    total: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{positives} of {total} engines" |
*
* @param {Basecamp_Versions_Scan_DetectionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_scan_detections: ((inputs: Basecamp_Versions_Scan_DetectionsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Scan_DetectionsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

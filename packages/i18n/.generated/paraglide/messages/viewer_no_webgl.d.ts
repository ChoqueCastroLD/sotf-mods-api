export type LocalizedString = import('../runtime.js').LocalizedString;
export type Viewer_No_WebglInputs = {};
/**
* | output |
* | --- |
* | "Your browser cannot show the 3D view, so the top-down preview stays." |
*
* @param {Viewer_No_WebglInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const viewer_no_webgl: ((inputs?: Viewer_No_WebglInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_No_WebglInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

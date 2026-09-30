export type LocalizedString = import('../runtime.js').LocalizedString;
export type Viewer_ControlsInputs = {};
/**
* | output |
* | --- |
* | "Drag to rotate, scroll or pinch to zoom, arrow keys to orbit, plus and minus to zoom." |
*
* @param {Viewer_ControlsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const viewer_controls: ((inputs?: Viewer_ControlsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_ControlsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

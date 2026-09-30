export type LocalizedString = import('../runtime.js').LocalizedString;
export type Viewer_Canvas_LabelInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Interactive 3D view of {name}" |
*
* @param {Viewer_Canvas_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const viewer_canvas_label: ((inputs: Viewer_Canvas_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_Canvas_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

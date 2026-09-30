export type LocalizedString = import('../runtime.js').LocalizedString;
export type Viewer_AltInputs = {
    name: NonNullable<unknown>;
    pieces: NonNullable<unknown>;
    width: NonNullable<unknown>;
    depth: NonNullable<unknown>;
    height: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Top-down preview of {name}: {pieces} pieces, {width} by {depth} by {height} metres." |
*
* @param {Viewer_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const viewer_alt: ((inputs: Viewer_AltInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_AltInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

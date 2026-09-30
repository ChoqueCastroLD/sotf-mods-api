export type LocalizedString = import('../runtime.js').LocalizedString;
export type Viewer_StatsInputs = {
    width: NonNullable<unknown>;
    depth: NonNullable<unknown>;
    height: NonNullable<unknown>;
    pieces: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{width} × {depth} × {height} m · {pieces} pieces" |
*
* @param {Viewer_StatsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const viewer_stats: ((inputs: Viewer_StatsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_StatsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Live_Embed_Badge_AltInputs = {
    kind: NonNullable<unknown>;
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{kind} badge: {name}" |
*
* @param {Live_Embed_Badge_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const live_embed_badge_alt: ((inputs: Live_Embed_Badge_AltInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_Badge_AltInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

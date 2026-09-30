export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Media_Cover_LegacyInputs = {};
/**
* | output |
* | --- |
* | "This cover is still being moved to the new image storage; it can be replaced but not removed yet." |
*
* @param {Basecamp_Media_Cover_LegacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_media_cover_legacy: ((inputs?: Basecamp_Media_Cover_LegacyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Cover_LegacyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

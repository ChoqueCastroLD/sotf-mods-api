export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_DescriptionInputs = {
    build: NonNullable<unknown>;
    share: NonNullable<unknown>;
    works: NonNullable<unknown>;
    broken: NonNullable<unknown>;
    pending: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Patch {build}: {share} of the 50 most downloaded Sons of the Forest mods confirmed by players — {works__number} working, {broken__number} broken, {pending__n..." |
*
* @param {Content_Radar_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_description: ((inputs: Content_Radar_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

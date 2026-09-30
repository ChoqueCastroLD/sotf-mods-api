export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Seo_TitleInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Do SOTF mods work on patch {build}? — Patch Radar" |
*
* @param {Content_Radar_Seo_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_seo_title: ((inputs: Content_Radar_Seo_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Seo_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

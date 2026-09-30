export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_ConfirmedInputs = {
    share: NonNullable<unknown>;
    count: NonNullable<unknown>;
    build: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{share} of the top {count__number} mod confirmed on {build}" |
* | * | "{share} of the top {count__number} mods confirmed on {build}" |
*
* @param {Content_Radar_ConfirmedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_confirmed: ((inputs: Content_Radar_ConfirmedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_ConfirmedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

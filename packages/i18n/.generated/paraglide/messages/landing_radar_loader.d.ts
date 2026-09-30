export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Radar_LoaderInputs = {
    loader: NonNullable<unknown>;
    version: NonNullable<unknown>;
    status: NonNullable<unknown>;
};
/**
* | status | output |
* | --- | --- |
* | "works" | "{loader} {version}: works" |
* | "partial" | "{loader} {version}: partly works" |
* | "broken" | "{loader} {version}: broken" |
* | * | "{loader} {version}: not tested yet" |
*
* @param {Landing_Radar_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_radar_loader: ((inputs: Landing_Radar_LoaderInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Radar_LoaderInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

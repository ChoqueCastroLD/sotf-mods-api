export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Featured_Badges_CountInputs = {
    count: NonNullable<unknown>;
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{count} of {max} selected" |
*
* @param {Settings_Featured_Badges_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_featured_badges_count: ((inputs: Settings_Featured_Badges_CountInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Featured_Badges_CountInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

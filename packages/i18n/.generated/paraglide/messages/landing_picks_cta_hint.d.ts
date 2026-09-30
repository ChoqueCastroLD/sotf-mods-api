export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Picks_Cta_HintInputs = {};
/**
* | output |
* | --- |
* | "Filter by category, compatibility, game build and more" |
*
* @param {Landing_Picks_Cta_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_picks_cta_hint: ((inputs?: Landing_Picks_Cta_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Picks_Cta_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

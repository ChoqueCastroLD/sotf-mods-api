export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Picks_CtaInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Browse all {count} mods" |
*
* @param {Landing_Picks_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_picks_cta: ((inputs: Landing_Picks_CtaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Picks_CtaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

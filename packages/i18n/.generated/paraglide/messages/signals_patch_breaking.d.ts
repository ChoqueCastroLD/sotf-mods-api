export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Patch_BreakingInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Game build {build} may break mods — check yours on the Patch Radar" |
*
* @param {Signals_Patch_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_patch_breaking: ((inputs: Signals_Patch_BreakingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Patch_BreakingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

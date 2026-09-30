export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Compat_PromptInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Game build {build} is out. Did the mods you downloaded still work? Tell us." |
*
* @param {Signals_Compat_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_compat_prompt: ((inputs: Signals_Compat_PromptInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Compat_PromptInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Autosave_HintInputs = {
    revision: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Changes save on their own · rev {revision}" |
*
* @param {Kits_Autosave_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_autosave_hint: ((inputs: Kits_Autosave_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Autosave_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

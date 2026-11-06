export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Unapprove_DoneInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} is pending approval again" |
*
* @param {Mod_Unapprove_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_unapprove_done: ((inputs: Mod_Unapprove_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Unapprove_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

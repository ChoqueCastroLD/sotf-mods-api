export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Comment_On_ModInputs = {
    actor: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} commented on {mod}" |
*
* @param {Signals_Comment_On_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_comment_on_mod: ((inputs: Signals_Comment_On_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Comment_On_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Kit_Added_My_ModInputs = {
    actor: NonNullable<unknown>;
    mod: NonNullable<unknown>;
    kit: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} added {mod} to the kit “{kit}”" |
*
* @param {Signals_Kit_Added_My_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_kit_added_my_mod: ((inputs: Signals_Kit_Added_My_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Kit_Added_My_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

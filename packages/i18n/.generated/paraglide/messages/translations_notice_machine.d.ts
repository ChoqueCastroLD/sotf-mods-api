export type LocalizedString = import('../runtime.js').LocalizedString;
export type Translations_Notice_MachineInputs = {
    language: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Translated from {language}" |
*
* @param {Translations_Notice_MachineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const translations_notice_machine: ((inputs: Translations_Notice_MachineInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Notice_MachineInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

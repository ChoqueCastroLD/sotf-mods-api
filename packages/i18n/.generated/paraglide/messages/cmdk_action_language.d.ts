export type LocalizedString = import('../runtime.js').LocalizedString;
export type Cmdk_Action_LanguageInputs = {
    language: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Language: {language}" |
*
* @param {Cmdk_Action_LanguageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const cmdk_action_language: ((inputs: Cmdk_Action_LanguageInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_LanguageInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

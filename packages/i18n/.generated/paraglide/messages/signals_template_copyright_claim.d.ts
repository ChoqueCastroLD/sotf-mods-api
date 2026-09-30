export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Template_Copyright_ClaimInputs = {};
/**
* | output |
* | --- |
* | "Removed after a valid copyright claim." |
*
* @param {Signals_Template_Copyright_ClaimInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_template_copyright_claim: ((inputs?: Signals_Template_Copyright_ClaimInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Copyright_ClaimInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Faq_Slow_AInputs = {};
/**
* | output |
* | --- |
* | "Microsoft Defender scans every RedLoader file the first time. The Defender exclusion option in the settings skips that scan." |
*
* @param {Manager_Faq_Slow_AInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_faq_slow_a: ((inputs?: Manager_Faq_Slow_AInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Slow_AInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

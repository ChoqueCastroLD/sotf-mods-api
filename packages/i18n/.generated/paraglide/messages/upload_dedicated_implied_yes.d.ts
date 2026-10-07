export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Dedicated_Implied_YesInputs = {};
/**
* | output |
* | --- |
* | "Yes. A server mod always runs on the dedicated server." |
*
* @param {Upload_Dedicated_Implied_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_dedicated_implied_yes: ((inputs?: Upload_Dedicated_Implied_YesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_Implied_YesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

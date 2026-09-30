export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Share_PrivateInputs = {};
/**
* | output |
* | --- |
* | "This kit is private: only you can see it. Make it public or unlisted to share it." |
*
* @param {Kits_Share_PrivateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_share_private: ((inputs?: Kits_Share_PrivateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_PrivateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

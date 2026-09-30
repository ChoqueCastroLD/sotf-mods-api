export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Badge_Name_Verified_CreatorInputs = {};
/**
* | output |
* | --- |
* | "Verified Creator" |
*
* @param {Signals_Badge_Name_Verified_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_badge_name_verified_creator: ((inputs?: Signals_Badge_Name_Verified_CreatorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Verified_CreatorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

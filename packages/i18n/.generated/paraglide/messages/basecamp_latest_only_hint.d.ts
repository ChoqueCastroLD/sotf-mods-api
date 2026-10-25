export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Latest_Only_HintInputs = {};
/**
* | output |
* | --- |
* | "Players can only download the newest version. Older versions stay listed with their changelogs, but their download links stop working. Use this when older ve..." |
*
* @param {Basecamp_Latest_Only_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_latest_only_hint: ((inputs?: Basecamp_Latest_Only_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Latest_Only_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

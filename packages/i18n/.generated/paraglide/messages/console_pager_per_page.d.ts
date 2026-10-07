export type LocalizedString = import('../runtime.js').LocalizedString;
export type Console_Pager_Per_PageInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{count} per page" |
*
* @param {Console_Pager_Per_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const console_pager_per_page: ((inputs: Console_Pager_Per_PageInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Pager_Per_PageInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

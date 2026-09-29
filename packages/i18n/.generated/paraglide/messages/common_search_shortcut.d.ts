export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Search_ShortcutInputs = {
    shortcut: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Press {shortcut} to search" |
*
* @param {Common_Search_ShortcutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_search_shortcut: ((inputs: Common_Search_ShortcutInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Search_ShortcutInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Items_TotalInputs = {
    count: NonNullable<unknown>;
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Items: {count}/{max}" |
*
* @param {Kits_Items_TotalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_items_total: ((inputs: Kits_Items_TotalInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Items_TotalInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

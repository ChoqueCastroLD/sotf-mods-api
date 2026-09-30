export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Items_LimitInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "A kit holds up to {max} items, dependencies included." |
*
* @param {Kits_Items_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_items_limit: ((inputs: Kits_Items_LimitInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Items_LimitInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

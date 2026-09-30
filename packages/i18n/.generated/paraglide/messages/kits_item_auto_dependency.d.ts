export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Item_Auto_DependencyInputs = {};
/**
* | output |
* | --- |
* | "Dependency, added automatically" |
*
* @param {Kits_Item_Auto_DependencyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_item_auto_dependency: ((inputs?: Kits_Item_Auto_DependencyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_Auto_DependencyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

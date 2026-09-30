export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Compare_Slot_LabelInputs = {
    n: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Mod {n}" |
*
* @param {Explore_Compare_Slot_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_compare_slot_label: ((inputs: Explore_Compare_Slot_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Slot_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

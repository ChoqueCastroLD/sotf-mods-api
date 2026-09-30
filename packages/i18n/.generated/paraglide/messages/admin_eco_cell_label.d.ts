export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Eco_Cell_LabelInputs = {
    loader: NonNullable<unknown>;
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{loader} on {build}" |
*
* @param {Admin_Eco_Cell_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_eco_cell_label: ((inputs: Admin_Eco_Cell_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Cell_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

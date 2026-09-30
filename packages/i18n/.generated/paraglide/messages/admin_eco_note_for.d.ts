export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Eco_Note_ForInputs = {
    loader: NonNullable<unknown>;
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Note: {loader} on {build}" |
*
* @param {Admin_Eco_Note_ForInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_eco_note_for: ((inputs: Admin_Eco_Note_ForInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Note_ForInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Eco_SavedInputs = {
    loader: NonNullable<unknown>;
    build: NonNullable<unknown>;
    status: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{loader} on {build}: {status}" |
*
* @param {Admin_Eco_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_eco_saved: ((inputs: Admin_Eco_SavedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_SavedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

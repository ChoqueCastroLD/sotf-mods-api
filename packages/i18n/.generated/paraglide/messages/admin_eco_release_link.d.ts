export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Eco_Release_LinkInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Release page of {name}" |
*
* @param {Admin_Eco_Release_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_eco_release_link: ((inputs: Admin_Eco_Release_LinkInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Release_LinkInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

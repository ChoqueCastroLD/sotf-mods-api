export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Kit_Picks_ToggleInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Staff pick: {name}" |
*
* @param {Admin_Kit_Picks_ToggleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_kit_picks_toggle: ((inputs: Admin_Kit_Picks_ToggleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_ToggleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

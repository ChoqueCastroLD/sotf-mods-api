export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Kit_Picks_OnInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} is now a staff pick." |
*
* @param {Admin_Kit_Picks_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_kit_picks_on: ((inputs: Admin_Kit_Picks_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

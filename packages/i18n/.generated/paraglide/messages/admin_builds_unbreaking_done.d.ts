export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Unbreaking_DoneInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{label} is no longer marked as breaking" |
*
* @param {Admin_Builds_Unbreaking_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_unbreaking_done: ((inputs: Admin_Builds_Unbreaking_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Unbreaking_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

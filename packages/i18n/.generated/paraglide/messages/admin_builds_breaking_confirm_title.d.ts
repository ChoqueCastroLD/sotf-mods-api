export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Breaking_Confirm_TitleInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Mark {label} as breaking?" |
*
* @param {Admin_Builds_Breaking_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_breaking_confirm_title: ((inputs: Admin_Builds_Breaking_Confirm_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Breaking_Confirm_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Eco_Show_RecentInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Show the latest {count}" |
*
* @param {Admin_Eco_Show_RecentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_eco_show_recent: ((inputs: Admin_Eco_Show_RecentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Show_RecentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

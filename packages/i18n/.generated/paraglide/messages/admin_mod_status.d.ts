export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Mod_StatusInputs = {
    status: NonNullable<unknown>;
};
/**
* | status | output |
* | --- | --- |
* | "pending" | "Pending" |
* | "unlisted" | "Unlisted" |
* | "archived" | "Archived" |
* | "rejected" | "Rejected" |
* | "removed" | "Removed" |
* | "draft" | "Draft" |
* | * | "Not public" |
*
* @param {Admin_Mod_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_mod_status: ((inputs: Admin_Mod_StatusInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Mod_StatusInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

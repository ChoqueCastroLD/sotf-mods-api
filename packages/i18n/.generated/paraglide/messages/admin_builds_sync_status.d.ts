export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Sync_StatusInputs = {
    checked: NonNullable<unknown>;
    buildId: NonNullable<unknown>;
    updated: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Last checked {checked}. Steam is on build {buildId}, updated {updated}." |
*
* @param {Admin_Builds_Sync_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_sync_status: ((inputs: Admin_Builds_Sync_StatusInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_StatusInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Sync_UnchangedInputs = {
    buildId: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "No new build. Steam is still on build {buildId}." |
*
* @param {Admin_Builds_Sync_UnchangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_sync_unchanged: ((inputs: Admin_Builds_Sync_UnchangedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_UnchangedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

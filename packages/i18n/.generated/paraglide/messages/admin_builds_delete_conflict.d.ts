export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Delete_ConflictInputs = {};
/**
* | output |
* | --- |
* | "Players already reported on this build. Keep it, or mark another one as current." |
*
* @param {Admin_Builds_Delete_ConflictInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_delete_conflict: ((inputs?: Admin_Builds_Delete_ConflictInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Delete_ConflictInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

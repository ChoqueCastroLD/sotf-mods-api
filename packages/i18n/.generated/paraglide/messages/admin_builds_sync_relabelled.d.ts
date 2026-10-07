export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Sync_RelabelledInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Build renamed to {label}" |
*
* @param {Admin_Builds_Sync_RelabelledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_sync_relabelled: ((inputs: Admin_Builds_Sync_RelabelledInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_RelabelledInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

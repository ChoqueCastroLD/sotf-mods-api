export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Sync_Failing_TextInputs = {
    error: NonNullable<unknown>;
    next: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Reason: {error}. The next check runs after {next}." |
*
* @param {Admin_Builds_Sync_Failing_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_sync_failing_text: ((inputs: Admin_Builds_Sync_Failing_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_Failing_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

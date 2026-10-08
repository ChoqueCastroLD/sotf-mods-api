export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dl_Retry_LabelInputs = {
    queue: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Retry the failed jobs of {queue}" |
*
* @param {Admin_Ops_Dl_Retry_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dl_retry_label: ((inputs: Admin_Ops_Dl_Retry_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Retry_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

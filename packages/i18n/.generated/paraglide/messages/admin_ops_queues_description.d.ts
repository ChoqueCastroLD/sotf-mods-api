export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Queues_DescriptionInputs = {
    queued: NonNullable<unknown>;
    active: NonNullable<unknown>;
    failed: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Queues with any job in the last 24 h, busiest first. Waiting: {queued} · running: {active} · failed in 24 h: {failed}" |
*
* @param {Admin_Ops_Queues_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_queues_description: ((inputs: Admin_Ops_Queues_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Queues_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

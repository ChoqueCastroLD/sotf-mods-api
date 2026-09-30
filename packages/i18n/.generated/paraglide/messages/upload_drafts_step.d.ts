export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Drafts_StepInputs = {
    current: NonNullable<unknown>;
    total: NonNullable<unknown>;
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Step {current} of {total} · {label}" |
*
* @param {Upload_Drafts_StepInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_drafts_step: ((inputs: Upload_Drafts_StepInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_StepInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

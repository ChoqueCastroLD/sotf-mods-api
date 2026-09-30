export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Success_Queued_DetailInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} is in the review queue. You’ll get a signal as soon as a ranger decides." |
*
* @param {Upload_Success_Queued_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_success_queued_detail: ((inputs: Upload_Success_Queued_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Queued_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

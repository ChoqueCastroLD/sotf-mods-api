export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Success_Queued_VersionInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The new version of {name} is waiting for a ranger. You’ll get a signal when it’s live." |
*
* @param {Upload_Success_Queued_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_success_queued_version: ((inputs: Upload_Success_Queued_VersionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Queued_VersionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

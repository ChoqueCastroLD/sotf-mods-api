export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Success_Live_VersionInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The new version of {name} is live and followers are being notified." |
*
* @param {Upload_Success_Live_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_success_live_version: ((inputs: Upload_Success_Live_VersionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Live_VersionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

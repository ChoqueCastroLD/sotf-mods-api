export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_BucketInputs = {
    bucket: NonNullable<unknown>;
};
/**
* | bucket | output |
* | --- | --- |
* | "anonymousRead" | "API v2 reads" |
* | "legacyRead" | "Legacy API reads" |
* | "downloads" | "Downloads" |
* | * | "{bucket}" |
*
* @param {Content_Dev_BucketInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_bucket: ((inputs: Content_Dev_BucketInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_BucketInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Gallery_SkippedInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} file skipped (wrong type, over 10 MB or gallery full)" |
* | * | "{count__number} files skipped (wrong type, over 10 MB or gallery full)" |
*
* @param {Upload_Gallery_SkippedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_gallery_skipped: ((inputs: Upload_Gallery_SkippedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_SkippedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Download_VersionInputs = {
    version: NonNullable<unknown>;
    size: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Download v{version} · {size}" |
*
* @param {Common_Download_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_download_version: ((inputs: Common_Download_VersionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Download_VersionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

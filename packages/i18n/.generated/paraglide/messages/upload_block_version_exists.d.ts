export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Block_Version_ExistsInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Version {version} already exists. Bump the version in manifest.json." |
*
* @param {Upload_Block_Version_ExistsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_block_version_exists: ((inputs: Upload_Block_Version_ExistsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Version_ExistsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

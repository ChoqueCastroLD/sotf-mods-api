export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Block_Version_Not_GreaterInputs = {
    version: NonNullable<unknown>;
    previous: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Version {version} must be greater than {previous}. Bump the version in manifest.json." |
*
* @param {Upload_Block_Version_Not_GreaterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_block_version_not_greater: ((inputs: Upload_Block_Version_Not_GreaterInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Version_Not_GreaterInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Block_Version_Not_SemverInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Version {version} is not a semantic version (x.y.z)." |
*
* @param {Upload_Block_Version_Not_SemverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_block_version_not_semver: ((inputs: Upload_Block_Version_Not_SemverInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Version_Not_SemverInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

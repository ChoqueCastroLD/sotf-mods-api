export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Version_From_ManifestInputs = {};
/**
* | output |
* | --- |
* | "Read from manifest.json. To change it, edit the manifest and upload the file again." |
*
* @param {Upload_Version_From_ManifestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_version_from_manifest: ((inputs?: Upload_Version_From_ManifestInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_From_ManifestInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

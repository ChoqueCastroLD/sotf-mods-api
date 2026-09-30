export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Download_Version_SizeInputs = {
    version: NonNullable<unknown>;
    size: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Download v{version} · {size}" |
*
* @param {Ui_Domain_Download_Version_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_download_version_size: ((inputs: Ui_Domain_Download_Version_SizeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Download_Version_SizeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

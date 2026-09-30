export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Download_Install_GuideInputs = {};
/**
* | output |
* | --- |
* | "How to install mods" |
*
* @param {Kits_Download_Install_GuideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_download_install_guide: ((inputs?: Kits_Download_Install_GuideInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_Install_GuideInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

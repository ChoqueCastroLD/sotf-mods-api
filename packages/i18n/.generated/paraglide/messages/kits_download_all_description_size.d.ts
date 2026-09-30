export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Download_All_Description_SizeInputs = {
    count: NonNullable<unknown>;
    size: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} file · {size} in total" |
* | * | "{count__number} files · {size} in total" |
*
* @param {Kits_Download_All_Description_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_download_all_description_size: ((inputs: Kits_Download_All_Description_SizeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_All_Description_SizeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

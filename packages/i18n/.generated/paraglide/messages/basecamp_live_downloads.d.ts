export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Live_DownloadsInputs = {
    count: NonNullable<unknown>;
    display: NonNullable<unknown>;
    name: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} download · {name}" |
* | * | "{display} downloads · {name}" |
*
* @param {Basecamp_Live_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_live_downloads: ((inputs: Basecamp_Live_DownloadsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_DownloadsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

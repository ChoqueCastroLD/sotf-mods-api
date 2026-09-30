export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Error_YoutubeInputs = {};
/**
* | output |
* | --- |
* | "Paste a YouTube video link (youtube.com/watch, youtu.be or shorts)." |
*
* @param {Upload_Error_YoutubeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_error_youtube: ((inputs?: Upload_Error_YoutubeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_YoutubeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

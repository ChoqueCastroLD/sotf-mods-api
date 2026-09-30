export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Markdown_RecommendedInputs = {
    min: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{min}+ recommended" |
*
* @param {Upload_Markdown_RecommendedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_markdown_recommended: ((inputs: Upload_Markdown_RecommendedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_RecommendedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

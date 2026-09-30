export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Brand_Font_LinkInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Get {name}" |
*
* @param {Content_Brand_Font_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_brand_font_link: ((inputs: Content_Brand_Font_LinkInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Font_LinkInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

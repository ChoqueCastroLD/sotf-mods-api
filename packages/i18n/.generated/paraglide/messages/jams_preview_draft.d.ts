export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Preview_DraftInputs = {};
/**
* | output |
* | --- |
* | "This is a draft, so there is no public page yet. The preview shows how it will look once announced." |
*
* @param {Jams_Preview_DraftInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_preview_draft: ((inputs?: Jams_Preview_DraftInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Preview_DraftInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

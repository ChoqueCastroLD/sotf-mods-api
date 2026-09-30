export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Editor_HintInputs = {
    modifier: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Markdown: **bold**, *italic*, `code`, [link](url), \|\|spoiler\|\|, @mentions · {modifier}+Enter to send" |
*
* @param {Social_Editor_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_editor_hint: ((inputs: Social_Editor_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

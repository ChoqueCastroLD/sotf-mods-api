export type LocalizedString = import('../runtime.js').LocalizedString;
export type Meta_Title_TemplateInputs = {
    title: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{title} \| SOTF Mods" |
*
* @param {Meta_Title_TemplateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const meta_title_template: ((inputs: Meta_Title_TemplateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Title_TemplateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

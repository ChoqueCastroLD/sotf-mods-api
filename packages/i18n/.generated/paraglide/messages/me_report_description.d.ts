export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Report_DescriptionInputs = {
    version: NonNullable<unknown>;
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Your field report on version {version} for game build {build} helps every survivor pick mods that run." |
*
* @param {Me_Report_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_report_description: ((inputs: Me_Report_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

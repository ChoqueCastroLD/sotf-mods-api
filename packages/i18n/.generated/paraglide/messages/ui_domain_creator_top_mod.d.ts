export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Creator_Top_ModInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Top mod: {mod}" |
*
* @param {Ui_Domain_Creator_Top_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_creator_top_mod: ((inputs: Ui_Domain_Creator_Top_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Creator_Top_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

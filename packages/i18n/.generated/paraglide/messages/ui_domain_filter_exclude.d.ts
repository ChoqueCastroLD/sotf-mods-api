export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Filter_ExcludeInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Exclude {label}" |
*
* @param {Ui_Domain_Filter_ExcludeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_filter_exclude: ((inputs: Ui_Domain_Filter_ExcludeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Filter_ExcludeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

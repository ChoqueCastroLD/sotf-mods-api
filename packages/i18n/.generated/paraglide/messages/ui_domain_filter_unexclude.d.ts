export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Filter_UnexcludeInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Stop excluding {label}" |
*
* @param {Ui_Domain_Filter_UnexcludeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_filter_unexclude: ((inputs: Ui_Domain_Filter_UnexcludeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Filter_UnexcludeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

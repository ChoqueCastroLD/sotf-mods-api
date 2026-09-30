export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Badge_TimesInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "×{count__number}" |
*
* @param {Ui_Domain_Badge_TimesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_badge_times: ((inputs: Ui_Domain_Badge_TimesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Badge_TimesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

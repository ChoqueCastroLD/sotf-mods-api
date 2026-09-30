export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Compat_Untested_OnInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Not verified on {build}" |
*
* @param {Ui_Domain_Compat_Untested_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_compat_untested_on: ((inputs: Ui_Domain_Compat_Untested_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_Untested_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

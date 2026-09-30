export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Compat_Broken_OnInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Broken on {build}" |
*
* @param {Ui_Domain_Compat_Broken_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_compat_broken_on: ((inputs: Ui_Domain_Compat_Broken_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_Broken_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

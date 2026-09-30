export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Compat_Works_OnInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Works on {build}" |
*
* @param {Ui_Domain_Compat_Works_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_compat_works_on: ((inputs: Ui_Domain_Compat_Works_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_Works_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

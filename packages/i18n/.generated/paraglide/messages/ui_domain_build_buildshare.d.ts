export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Build_BuildshareInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "BuildShare {version}" |
*
* @param {Ui_Domain_Build_BuildshareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_build_buildshare: ((inputs: Ui_Domain_Build_BuildshareInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Build_BuildshareInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Toast_Latest_OnlyInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Only the latest version of {name} can be downloaded. The creator turned off older versions." |
*
* @param {Mod_Toast_Latest_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_toast_latest_only: ((inputs: Mod_Toast_Latest_OnlyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Latest_OnlyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

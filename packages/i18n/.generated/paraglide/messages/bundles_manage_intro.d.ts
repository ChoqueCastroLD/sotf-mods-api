export type LocalizedString = import('../runtime.js').LocalizedString;
export type Bundles_Manage_IntroInputs = {};
/**
* | output |
* | --- |
* | "Attach one of your kits as an official bundle. Players get every mod of the kit in one zip, rebuilt when an item updates." |
*
* @param {Bundles_Manage_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const bundles_manage_intro: ((inputs?: Bundles_Manage_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Manage_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

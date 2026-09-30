export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Broken_On_CurrentInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Broken on {build}" |
*
* @param {Me_Broken_On_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_broken_on_current: ((inputs: Me_Broken_On_CurrentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Broken_On_CurrentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

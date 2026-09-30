export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Up_To_DateInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up to date ({version})" |
*
* @param {Me_Up_To_DateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_up_to_date: ((inputs: Me_Up_To_DateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Up_To_DateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

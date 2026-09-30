export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_PeriodInputs = {
    start: NonNullable<unknown>;
    end: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{start} – {end}" |
*
* @param {Admin_PeriodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_period: ((inputs: Admin_PeriodInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_PeriodInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

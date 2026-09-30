export type LocalizedString = import('../runtime.js').LocalizedString;
export type Requests_LimitsInputs = {
    open: NonNullable<unknown>;
    perDay: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You can have up to {open__number} open requests and post {perDay__number} per day." |
*
* @param {Requests_LimitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const requests_limits: ((inputs: Requests_LimitsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_LimitsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

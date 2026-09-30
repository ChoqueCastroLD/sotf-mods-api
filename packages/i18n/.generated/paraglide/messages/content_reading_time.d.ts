export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Reading_TimeInputs = {
    minutes: NonNullable<unknown>;
};
/**
* | minutes__plural | output |
* | --- | --- |
* | "one" | "{minutes__number} min read" |
* | * | "{minutes__number} min read" |
*
* @param {Content_Reading_TimeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_reading_time: ((inputs: Content_Reading_TimeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Reading_TimeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

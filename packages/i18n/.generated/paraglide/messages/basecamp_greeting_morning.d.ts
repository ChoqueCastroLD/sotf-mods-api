export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Greeting_MorningInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Good morning, {name}" |
*
* @param {Basecamp_Greeting_MorningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_greeting_morning: ((inputs: Basecamp_Greeting_MorningInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Greeting_MorningInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Greeting_EveningInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Good evening, {name}" |
*
* @param {Basecamp_Greeting_EveningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_greeting_evening: ((inputs: Basecamp_Greeting_EveningInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Greeting_EveningInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

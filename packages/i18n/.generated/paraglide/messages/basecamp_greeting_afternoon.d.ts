export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Greeting_AfternoonInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Good afternoon, {name}" |
*
* @param {Basecamp_Greeting_AfternoonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_greeting_afternoon: ((inputs: Basecamp_Greeting_AfternoonInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Greeting_AfternoonInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

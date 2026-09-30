export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Greeting_NightInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Late shift, {name}" |
*
* @param {Basecamp_Greeting_NightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_greeting_night: ((inputs: Basecamp_Greeting_NightInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Greeting_NightInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_GreetingInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Hi {name}," |
*
* @param {Emails_Notify_GreetingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_greeting: ((inputs: Emails_Notify_GreetingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_GreetingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

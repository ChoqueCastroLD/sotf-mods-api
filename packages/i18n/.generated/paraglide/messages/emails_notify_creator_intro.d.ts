export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Creator_IntroInputs = {
    start: NonNullable<unknown>;
    end: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Stats for your mods from {start} to {end}." |
*
* @param {Emails_Notify_Creator_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_creator_intro: ((inputs: Emails_Notify_Creator_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

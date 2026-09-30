export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Inbox_State_AnsweredInputs = {};
/**
* | output |
* | --- |
* | "Answered" |
*
* @param {Basecamp_Inbox_State_AnsweredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_inbox_state_answered: ((inputs?: Basecamp_Inbox_State_AnsweredInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_State_AnsweredInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

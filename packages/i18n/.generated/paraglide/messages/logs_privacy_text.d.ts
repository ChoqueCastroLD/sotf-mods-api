export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Privacy_TextInputs = {};
/**
* | output |
* | --- |
* | "Windows user names in file paths, Steam IDs, IP addresses, e-mails, tokens and keys are replaced before the log is stored." |
*
* @param {Logs_Privacy_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_privacy_text: ((inputs?: Logs_Privacy_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Privacy_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

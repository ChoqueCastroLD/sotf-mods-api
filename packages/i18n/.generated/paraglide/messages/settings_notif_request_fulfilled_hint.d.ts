export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Notif_Request_Fulfilled_HintInputs = {};
/**
* | output |
* | --- |
* | "A mod you requested or voted for was published." |
*
* @param {Settings_Notif_Request_Fulfilled_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_notif_request_fulfilled_hint: ((inputs?: Settings_Notif_Request_Fulfilled_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Request_Fulfilled_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

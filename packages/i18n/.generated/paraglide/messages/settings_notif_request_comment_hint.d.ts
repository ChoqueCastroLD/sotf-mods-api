export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Notif_Request_Comment_HintInputs = {};
/**
* | output |
* | --- |
* | "Someone commented on a request you made or adopted." |
*
* @param {Settings_Notif_Request_Comment_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_notif_request_comment_hint: ((inputs?: Settings_Notif_Request_Comment_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Request_Comment_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

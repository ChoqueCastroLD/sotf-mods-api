export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Multiplayer_Host_Only_HintInputs = {};
/**
* | output |
* | --- |
* | "Only the host needs it; guests join without it." |
*
* @param {Upload_Multiplayer_Host_Only_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_multiplayer_host_only_hint: ((inputs?: Upload_Multiplayer_Host_Only_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Host_Only_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

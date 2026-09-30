export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Decided_Request_ChangesInputs = {
    title: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Changes requested: {title}" |
*
* @param {Ranger_Decided_Request_ChangesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_decided_request_changes: ((inputs: Ranger_Decided_Request_ChangesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_Request_ChangesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

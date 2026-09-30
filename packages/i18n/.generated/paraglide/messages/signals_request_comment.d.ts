export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Request_CommentInputs = {
    actor: NonNullable<unknown>;
    request: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} commented on the request “{request}”" |
*
* @param {Signals_Request_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_request_comment: ((inputs: Signals_Request_CommentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Request_CommentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

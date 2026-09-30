export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Request_FulfilledInputs = {
    mod: NonNullable<unknown>;
    request: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} is out and fulfils the request “{request}”" |
*
* @param {Signals_Request_FulfilledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_request_fulfilled: ((inputs: Signals_Request_FulfilledInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Request_FulfilledInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

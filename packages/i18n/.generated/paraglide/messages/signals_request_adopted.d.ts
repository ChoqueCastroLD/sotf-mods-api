export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Request_AdoptedInputs = {
    actor: NonNullable<unknown>;
    request: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} is working on your request “{request}”" |
*
* @param {Signals_Request_AdoptedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_request_adopted: ((inputs: Signals_Request_AdoptedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Request_AdoptedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

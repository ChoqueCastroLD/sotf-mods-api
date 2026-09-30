export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Request_Comment_GroupedInputs = {
    count: NonNullable<unknown>;
    request: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new comment on the request “{request}”" |
* | * | "{count__number} new comments on the request “{request}”" |
*
* @param {Signals_Request_Comment_GroupedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_request_comment_grouped: ((inputs: Signals_Request_Comment_GroupedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Request_Comment_GroupedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Limit_KeyInputs = {
    key: NonNullable<unknown>;
};
/**
* | key | output |
* | --- | --- |
* | "ip" | "per IP" |
* | "user" | "per account" |
* | "chat" | "per player" |
* | * | "{key}" |
*
* @param {Content_Dev_Limit_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_limit_key: ((inputs: Content_Dev_Limit_KeyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Limit_KeyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

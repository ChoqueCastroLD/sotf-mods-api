export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Failure_ForbiddenInputs = {};
/**
* | output |
* | --- |
* | "Your account can’t upload right now (unverified email or a restriction)." |
*
* @param {Upload_Failure_ForbiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_failure_forbidden: ((inputs?: Upload_Failure_ForbiddenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Failure_ForbiddenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

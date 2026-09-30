export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Welcome_VerifyInputs = {
    email: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "We sent a verification link to {email}. Open it to start commenting, reviewing and uploading." |
*
* @param {Auth_Welcome_VerifyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_welcome_verify: ((inputs: Auth_Welcome_VerifyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Welcome_VerifyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Compat_PromptInputs = {
    version: NonNullable<unknown>;
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You downloaded v{version}. Did it work on {build}?" |
*
* @param {Social_Compat_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_compat_prompt: ((inputs: Social_Compat_PromptInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_PromptInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

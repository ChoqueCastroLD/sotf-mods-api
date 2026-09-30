export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Review_Update_PromptInputs = {
    mod: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} released version {version}. Want to update your review?" |
*
* @param {Signals_Review_Update_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_review_update_prompt: ((inputs: Signals_Review_Update_PromptInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Review_Update_PromptInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

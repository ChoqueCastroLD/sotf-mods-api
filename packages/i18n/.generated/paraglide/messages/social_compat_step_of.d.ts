export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Compat_Step_OfInputs = {
    step: NonNullable<unknown>;
    total: NonNullable<unknown>;
    title: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Step {step} of {total}: {title}" |
*
* @param {Social_Compat_Step_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_compat_step_of: ((inputs: Social_Compat_Step_OfInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Step_OfInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

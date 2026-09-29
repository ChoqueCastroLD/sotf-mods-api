export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Step_OfInputs = {
    current: NonNullable<unknown>;
    total: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Step {current} of {total}" |
*
* @param {Ui_Step_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_step_of: ((inputs: Ui_Step_OfInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Step_OfInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Settings_Resubmit_HintInputs = {};
/**
* | output |
* | --- |
* | "Send it back to the Ranger Station once you made the requested changes." |
*
* @param {Basecamp_Settings_Resubmit_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_settings_resubmit_hint: ((inputs?: Basecamp_Settings_Resubmit_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Resubmit_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

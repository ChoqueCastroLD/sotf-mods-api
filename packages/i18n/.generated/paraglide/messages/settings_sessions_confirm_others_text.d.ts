export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Sessions_Confirm_Others_TextInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} other session will end. This browser stays logged in." |
* | * | "{count__number} other sessions will end. This browser stays logged in." |
*
* @param {Settings_Sessions_Confirm_Others_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_sessions_confirm_others_text: ((inputs: Settings_Sessions_Confirm_Others_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Confirm_Others_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

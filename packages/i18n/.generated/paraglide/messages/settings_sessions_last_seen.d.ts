export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Sessions_Last_SeenInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "last active {when}" |
*
* @param {Settings_Sessions_Last_SeenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_sessions_last_seen: ((inputs: Settings_Sessions_Last_SeenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Last_SeenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

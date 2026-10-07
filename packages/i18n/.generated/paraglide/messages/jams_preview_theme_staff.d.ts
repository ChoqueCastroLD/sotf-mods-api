export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Preview_Theme_StaffInputs = {
    theme: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Only staff see the real theme for now: {theme}" |
*
* @param {Jams_Preview_Theme_StaffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_preview_theme_staff: ((inputs: Jams_Preview_Theme_StaffInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Preview_Theme_StaffInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

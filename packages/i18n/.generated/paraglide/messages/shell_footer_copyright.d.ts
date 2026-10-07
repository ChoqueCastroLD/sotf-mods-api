export type LocalizedString = import('../runtime.js').LocalizedString;
export type Shell_Footer_CopyrightInputs = {
    year: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "© {year} SOTF Mods" |
*
* @param {Shell_Footer_CopyrightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const shell_footer_copyright: ((inputs: Shell_Footer_CopyrightInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_CopyrightInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

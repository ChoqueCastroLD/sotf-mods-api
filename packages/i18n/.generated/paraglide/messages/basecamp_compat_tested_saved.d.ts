export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Compat_Tested_SavedInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Tested builds of v{version} saved" |
*
* @param {Basecamp_Compat_Tested_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_compat_tested_saved: ((inputs: Basecamp_Compat_Tested_SavedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Tested_SavedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

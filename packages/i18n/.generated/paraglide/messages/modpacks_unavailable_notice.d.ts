export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Unavailable_NoticeInputs = {
    names: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "No longer available: {names}. They are skipped when the modpack is downloaded." |
*
* @param {Modpacks_Unavailable_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_unavailable_notice: ((inputs: Modpacks_Unavailable_NoticeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Unavailable_NoticeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

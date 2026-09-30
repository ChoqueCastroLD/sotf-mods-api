export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Toast_Followed_CreatorInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You follow {name}." |
*
* @param {Mod_Toast_Followed_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_toast_followed_creator: ((inputs: Mod_Toast_Followed_CreatorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Followed_CreatorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

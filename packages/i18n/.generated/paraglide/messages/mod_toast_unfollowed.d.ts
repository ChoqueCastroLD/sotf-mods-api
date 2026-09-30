export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Toast_UnfollowedInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} left your backpack." |
*
* @param {Mod_Toast_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_toast_unfollowed: ((inputs: Mod_Toast_UnfollowedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_UnfollowedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

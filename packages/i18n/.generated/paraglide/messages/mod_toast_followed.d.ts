export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Toast_FollowedInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} is in your backpack. You’ll hear about updates." |
*
* @param {Mod_Toast_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_toast_followed: ((inputs: Mod_Toast_FollowedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_FollowedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

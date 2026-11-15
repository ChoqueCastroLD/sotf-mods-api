export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Cover_Too_SmallInputs = {
    width: NonNullable<unknown>;
    min: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "This picture is {width} px wide. Use one at least {min} px wide so it looks sharp on the page." |
*
* @param {Modpacks_Cover_Too_SmallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_cover_too_small: ((inputs: Modpacks_Cover_Too_SmallInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_Too_SmallInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

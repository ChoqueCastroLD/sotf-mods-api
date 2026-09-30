export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Media_Move_UpInputs = {
    n: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Move image {n} up" |
*
* @param {Basecamp_Media_Move_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_media_move_up: ((inputs: Basecamp_Media_Move_UpInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Move_UpInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

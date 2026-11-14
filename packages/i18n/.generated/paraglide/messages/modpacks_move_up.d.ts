export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Move_UpInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Move {name} up" |
*
* @param {Modpacks_Move_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_move_up: ((inputs: Modpacks_Move_UpInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Move_UpInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Multiplayer_Client_SideInputs = {};
/**
* | output |
* | --- |
* | "Only you need it" |
*
* @param {Explore_Multiplayer_Client_SideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_multiplayer_client_side: ((inputs?: Explore_Multiplayer_Client_SideInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Multiplayer_Client_SideInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

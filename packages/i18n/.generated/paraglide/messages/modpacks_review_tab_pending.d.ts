export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Review_Tab_PendingInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Pending ({count__number})" |
*
* @param {Modpacks_Review_Tab_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_review_tab_pending: ((inputs: Modpacks_Review_Tab_PendingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_Tab_PendingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

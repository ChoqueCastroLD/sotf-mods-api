export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Hidden_By_Ranger_ReasonInputs = {
    reason: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Hidden by a moderator: {reason}" |
*
* @param {Ui_Domain_Hidden_By_Ranger_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_hidden_by_ranger_reason: ((inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Hidden_By_Ranger_ReasonInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

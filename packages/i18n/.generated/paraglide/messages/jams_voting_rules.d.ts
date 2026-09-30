export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Voting_RulesInputs = {
    minDays: NonNullable<unknown>;
};
/**
* | minDays__plural | output |
* | --- | --- |
* | "one" | "Only verified accounts at least {minDays__number} day old can vote, and never for their own entries." |
* | * | "Only verified accounts at least {minDays__number} days old can vote, and never for their own entries." |
*
* @param {Jams_Voting_RulesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_voting_rules: ((inputs: Jams_Voting_RulesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Voting_RulesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

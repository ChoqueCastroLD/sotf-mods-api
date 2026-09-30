export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Jam_PhaseInputs = {
    phase: NonNullable<unknown>;
    jam: NonNullable<unknown>;
};
/**
* | phase | output |
* | --- | --- |
* | "announced" | "Mod Jam announced: {jam}" |
* | "submissions" | "Submissions are open in {jam}" |
* | "voting" | "Voting is open in {jam}" |
* | "results" | "Results are out for {jam}" |
* | * | "{jam} has an update" |
*
* @param {Emails_Notify_Item_Jam_PhaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_jam_phase: ((inputs: Emails_Notify_Item_Jam_PhaseInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Jam_PhaseInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

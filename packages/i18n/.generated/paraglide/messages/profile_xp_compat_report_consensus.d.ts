export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Xp_Compat_Report_ConsensusInputs = {};
/**
* | output |
* | --- |
* | "Bonus: your report matches the consensus after 72 h" |
*
* @param {Profile_Xp_Compat_Report_ConsensusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_xp_compat_report_consensus: ((inputs?: Profile_Xp_Compat_Report_ConsensusInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Compat_Report_ConsensusInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;

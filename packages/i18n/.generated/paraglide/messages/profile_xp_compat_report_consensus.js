/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Compat_Report_ConsensusInputs */

const en_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus: your report matches the consensus after 72 h`)
};

const es_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus: tu reporte coincide con el consenso a las 72 h`)
};

const de_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus: Dein Bericht stimmt nach 72 h mit dem Konsens überein`)
};

const fr_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus : votre rapport rejoint le consensus après 72 h`)
};

const it_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus: il tuo rapporto coincide con il consenso dopo 72 h`)
};

const nl_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus: je rapport komt na 72 uur overeen met de consensus`)
};

const pl_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus: twój raport pokrywa się z konsensusem po 72 h`)
};

const pt_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bônus: seu relatório coincide com o consenso após 72 h`)
};

const ru_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бонус: ваш отчёт совпал с общим мнением через 72 ч`)
};

const sv_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus: din rapport stämmer med konsensus efter 72 h`)
};

const tr_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bonus: raporun 72 saat sonra uzlaşıyla eşleşir`)
};

const zh_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖励：72 小时后你的报告与共识一致`)
};

const ja_profile_xp_compat_report_consensus = /** @type {(inputs: Profile_Xp_Compat_Report_ConsensusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ボーナス：72 時間後にレポートが合意と一致`)
};

/**
* | output |
* | --- |
* | "Bonus: your report matches the consensus after 72 h" |
*
* @param {Profile_Xp_Compat_Report_ConsensusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_compat_report_consensus = /** @type {((inputs?: Profile_Xp_Compat_Report_ConsensusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Compat_Report_ConsensusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_compat_report_consensus(inputs)
	if (locale === "de") return de_profile_xp_compat_report_consensus(inputs)
	if (locale === "fr") return fr_profile_xp_compat_report_consensus(inputs)
	if (locale === "it") return it_profile_xp_compat_report_consensus(inputs)
	if (locale === "nl") return nl_profile_xp_compat_report_consensus(inputs)
	if (locale === "pl") return pl_profile_xp_compat_report_consensus(inputs)
	if (locale === "pt") return pt_profile_xp_compat_report_consensus(inputs)
	if (locale === "ru") return ru_profile_xp_compat_report_consensus(inputs)
	if (locale === "sv") return sv_profile_xp_compat_report_consensus(inputs)
	if (locale === "tr") return tr_profile_xp_compat_report_consensus(inputs)
	if (locale === "zh") return zh_profile_xp_compat_report_consensus(inputs)
	if (locale === "ja") return ja_profile_xp_compat_report_consensus(inputs)
	return en_profile_xp_compat_report_consensus(inputs)
});

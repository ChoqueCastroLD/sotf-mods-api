/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Stats_LabelInputs */

const en_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stats`)
};

const es_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estadísticas`)
};

const de_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiken`)
};

const fr_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiques`)
};

const it_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiche`)
};

const nl_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistieken`)
};

const pl_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statystyki`)
};

const pt_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estatísticas`)
};

const ru_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статистика`)
};

const sv_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistik`)
};

const tr_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstatistikler`)
};

const zh_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`统计`)
};

const ja_profile_stats_label = /** @type {(inputs: Profile_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`統計`)
};

/**
* | output |
* | --- |
* | "Stats" |
*
* @param {Profile_Stats_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stats_label = /** @type {((inputs?: Profile_Stats_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stats_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stats_label(inputs)
	if (locale === "de") return de_profile_stats_label(inputs)
	if (locale === "fr") return fr_profile_stats_label(inputs)
	if (locale === "it") return it_profile_stats_label(inputs)
	if (locale === "nl") return nl_profile_stats_label(inputs)
	if (locale === "pl") return pl_profile_stats_label(inputs)
	if (locale === "pt") return pt_profile_stats_label(inputs)
	if (locale === "ru") return ru_profile_stats_label(inputs)
	if (locale === "sv") return sv_profile_stats_label(inputs)
	if (locale === "tr") return tr_profile_stats_label(inputs)
	if (locale === "zh") return zh_profile_stats_label(inputs)
	if (locale === "ja") return ja_profile_stats_label(inputs)
	return en_profile_stats_label(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Stats_LabelInputs */

const en_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build stats`)
};

const es_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estadísticas de la build`)
};

const de_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build-Statistiken`)
};

const fr_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiques de la build`)
};

const it_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiche della build`)
};

const nl_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildstatistieken`)
};

const pl_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statystyki buildu`)
};

const pt_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estatísticas da build`)
};

const ru_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статистика постройки`)
};

const sv_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistik för bygget`)
};

const tr_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı istatistikleri`)
};

const zh_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑数据`)
};

const ja_builds_stats_label = /** @type {(inputs: Builds_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築の統計`)
};

/**
* | output |
* | --- |
* | "Build stats" |
*
* @param {Builds_Stats_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_stats_label = /** @type {((inputs?: Builds_Stats_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Stats_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_stats_label(inputs)
	if (locale === "de") return de_builds_stats_label(inputs)
	if (locale === "fr") return fr_builds_stats_label(inputs)
	if (locale === "it") return it_builds_stats_label(inputs)
	if (locale === "nl") return nl_builds_stats_label(inputs)
	if (locale === "pl") return pl_builds_stats_label(inputs)
	if (locale === "pt") return pt_builds_stats_label(inputs)
	if (locale === "ru") return ru_builds_stats_label(inputs)
	if (locale === "sv") return sv_builds_stats_label(inputs)
	if (locale === "tr") return tr_builds_stats_label(inputs)
	if (locale === "zh") return zh_builds_stats_label(inputs)
	if (locale === "ja") return ja_builds_stats_label(inputs)
	return en_builds_stats_label(inputs)
});

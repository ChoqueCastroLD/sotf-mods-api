/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Stats_AriaInputs */

const en_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site statistics`)
};

const es_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estadísticas del sitio`)
};

const de_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiken der Website`)
};

const fr_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiques du site`)
};

const it_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiche del sito`)
};

const nl_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistieken van de site`)
};

const pl_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statystyki serwisu`)
};

const pt_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estatísticas do site`)
};

const ru_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статистика сайта`)
};

const sv_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webbplatsens statistik`)
};

const tr_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site istatistikleri`)
};

const zh_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站统计`)
};

const ja_landing_stats_aria = /** @type {(inputs: Landing_Stats_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトの統計`)
};

/**
* | output |
* | --- |
* | "Site statistics" |
*
* @param {Landing_Stats_AriaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_stats_aria = /** @type {((inputs?: Landing_Stats_AriaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Stats_AriaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_stats_aria(inputs)
	if (locale === "de") return de_landing_stats_aria(inputs)
	if (locale === "fr") return fr_landing_stats_aria(inputs)
	if (locale === "it") return it_landing_stats_aria(inputs)
	if (locale === "nl") return nl_landing_stats_aria(inputs)
	if (locale === "pl") return pl_landing_stats_aria(inputs)
	if (locale === "pt") return pt_landing_stats_aria(inputs)
	if (locale === "ru") return ru_landing_stats_aria(inputs)
	if (locale === "sv") return sv_landing_stats_aria(inputs)
	if (locale === "tr") return tr_landing_stats_aria(inputs)
	if (locale === "zh") return zh_landing_stats_aria(inputs)
	if (locale === "ja") return ja_landing_stats_aria(inputs)
	return en_landing_stats_aria(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_OpenInputs */

const en_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore the chart`)
};

const es_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar el gráfico`)
};

const de_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diagramm erkunden`)
};

const fr_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer le graphique`)
};

const it_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora il grafico`)
};

const nl_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafiek bekijken`)
};

const pl_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj wykres`)
};

const pt_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar o gráfico`)
};

const ru_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть график`)
};

const sv_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska diagrammet`)
};

const tr_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafiği incele`)
};

const zh_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看图表`)
};

const ja_mod_stats_open = /** @type {(inputs: Mod_Stats_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グラフを開く`)
};

/**
* | output |
* | --- |
* | "Explore the chart" |
*
* @param {Mod_Stats_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_open = /** @type {((inputs?: Mod_Stats_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_open(inputs)
	if (locale === "de") return de_mod_stats_open(inputs)
	if (locale === "fr") return fr_mod_stats_open(inputs)
	if (locale === "it") return it_mod_stats_open(inputs)
	if (locale === "nl") return nl_mod_stats_open(inputs)
	if (locale === "pl") return pl_mod_stats_open(inputs)
	if (locale === "pt") return pt_mod_stats_open(inputs)
	if (locale === "ru") return ru_mod_stats_open(inputs)
	if (locale === "sv") return sv_mod_stats_open(inputs)
	if (locale === "tr") return tr_mod_stats_open(inputs)
	if (locale === "zh") return zh_mod_stats_open(inputs)
	if (locale === "ja") return ja_mod_stats_open(inputs)
	return en_mod_stats_open(inputs)
});

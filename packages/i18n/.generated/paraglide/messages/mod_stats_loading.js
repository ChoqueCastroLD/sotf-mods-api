/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_LoadingInputs */

const en_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading chart…`)
};

const es_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando gráfico…`)
};

const de_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diagramm wird geladen…`)
};

const fr_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement du graphique…`)
};

const it_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento del grafico…`)
};

const nl_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafiek laden…`)
};

const pl_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie wykresu…`)
};

const pt_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando gráfico…`)
};

const ru_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка графика…`)
};

const sv_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar diagrammet…`)
};

const tr_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafik yükleniyor…`)
};

const zh_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载图表…`)
};

const ja_mod_stats_loading = /** @type {(inputs: Mod_Stats_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グラフを読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading chart…" |
*
* @param {Mod_Stats_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_loading = /** @type {((inputs?: Mod_Stats_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_loading(inputs)
	if (locale === "de") return de_mod_stats_loading(inputs)
	if (locale === "fr") return fr_mod_stats_loading(inputs)
	if (locale === "it") return it_mod_stats_loading(inputs)
	if (locale === "nl") return nl_mod_stats_loading(inputs)
	if (locale === "pl") return pl_mod_stats_loading(inputs)
	if (locale === "pt") return pt_mod_stats_loading(inputs)
	if (locale === "ru") return ru_mod_stats_loading(inputs)
	if (locale === "sv") return sv_mod_stats_loading(inputs)
	if (locale === "tr") return tr_mod_stats_loading(inputs)
	if (locale === "zh") return zh_mod_stats_loading(inputs)
	if (locale === "ja") return ja_mod_stats_loading(inputs)
	return en_mod_stats_loading(inputs)
});

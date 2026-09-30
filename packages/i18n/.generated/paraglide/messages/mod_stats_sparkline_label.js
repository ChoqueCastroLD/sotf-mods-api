/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_Sparkline_LabelInputs */

const en_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daily downloads, last 30 days`)
};

const es_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas diarias, últimos 30 días`)
};

const de_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tägliche Downloads, letzte 30 Tage`)
};

const fr_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements quotidiens, 30 derniers jours`)
};

const it_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download giornalieri, ultimi 30 giorni`)
};

const nl_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagelijkse downloads, laatste 30 dagen`)
};

const pl_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzienne pobrania, ostatnie 30 dni`)
};

const pt_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads diários, últimos 30 dias`)
};

const ru_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки по дням, последние 30 дней`)
};

const sv_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagliga nedladdningar, senaste 30 dagarna`)
};

const tr_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük indirmeler, son 30 gün`)
};

const zh_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每日下载量，最近 30 天`)
};

const ja_mod_stats_sparkline_label = /** @type {(inputs: Mod_Stats_Sparkline_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日別ダウンロード数、過去 30 日間`)
};

/**
* | output |
* | --- |
* | "Daily downloads, last 30 days" |
*
* @param {Mod_Stats_Sparkline_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_sparkline_label = /** @type {((inputs?: Mod_Stats_Sparkline_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Sparkline_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_sparkline_label(inputs)
	if (locale === "de") return de_mod_stats_sparkline_label(inputs)
	if (locale === "fr") return fr_mod_stats_sparkline_label(inputs)
	if (locale === "it") return it_mod_stats_sparkline_label(inputs)
	if (locale === "nl") return nl_mod_stats_sparkline_label(inputs)
	if (locale === "pl") return pl_mod_stats_sparkline_label(inputs)
	if (locale === "pt") return pt_mod_stats_sparkline_label(inputs)
	if (locale === "ru") return ru_mod_stats_sparkline_label(inputs)
	if (locale === "sv") return sv_mod_stats_sparkline_label(inputs)
	if (locale === "tr") return tr_mod_stats_sparkline_label(inputs)
	if (locale === "zh") return zh_mod_stats_sparkline_label(inputs)
	if (locale === "ja") return ja_mod_stats_sparkline_label(inputs)
	return en_mod_stats_sparkline_label(inputs)
});

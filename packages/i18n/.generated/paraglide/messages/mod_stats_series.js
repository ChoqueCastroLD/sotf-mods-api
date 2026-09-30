/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_SeriesInputs */

const en_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads per day`)
};

const es_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas por día`)
};

const de_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads pro Tag`)
};

const fr_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements par jour`)
};

const it_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download al giorno`)
};

const nl_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads per dag`)
};

const pl_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania dziennie`)
};

const pt_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads por dia`)
};

const ru_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузок в день`)
};

const sv_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar per dag`)
};

const tr_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük indirme`)
};

const zh_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每日下载量`)
};

const ja_mod_stats_series = /** @type {(inputs: Mod_Stats_SeriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1日あたりのダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads per day" |
*
* @param {Mod_Stats_SeriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_series = /** @type {((inputs?: Mod_Stats_SeriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_SeriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_series(inputs)
	if (locale === "de") return de_mod_stats_series(inputs)
	if (locale === "fr") return fr_mod_stats_series(inputs)
	if (locale === "it") return it_mod_stats_series(inputs)
	if (locale === "nl") return nl_mod_stats_series(inputs)
	if (locale === "pl") return pl_mod_stats_series(inputs)
	if (locale === "pt") return pt_mod_stats_series(inputs)
	if (locale === "ru") return ru_mod_stats_series(inputs)
	if (locale === "sv") return sv_mod_stats_series(inputs)
	if (locale === "tr") return tr_mod_stats_series(inputs)
	if (locale === "zh") return zh_mod_stats_series(inputs)
	if (locale === "ja") return ja_mod_stats_series(inputs)
	return en_mod_stats_series(inputs)
});

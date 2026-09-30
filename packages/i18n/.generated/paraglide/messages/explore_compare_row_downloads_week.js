/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_Row_Downloads_WeekInputs */

const en_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads this week`)
};

const es_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas esta semana`)
};

const de_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads diese Woche`)
};

const fr_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements cette semaine`)
};

const it_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download questa settimana`)
};

const nl_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads deze week`)
};

const pl_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania w tym tygodniu`)
};

const pt_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads nesta semana`)
};

const ru_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузок за неделю`)
};

const sv_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar den här veckan`)
};

const tr_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu haftaki indirmeler`)
};

const zh_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周下载量`)
};

const ja_explore_compare_row_downloads_week = /** @type {(inputs: Explore_Compare_Row_Downloads_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads this week" |
*
* @param {Explore_Compare_Row_Downloads_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_row_downloads_week = /** @type {((inputs?: Explore_Compare_Row_Downloads_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Row_Downloads_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_row_downloads_week(inputs)
	if (locale === "de") return de_explore_compare_row_downloads_week(inputs)
	if (locale === "fr") return fr_explore_compare_row_downloads_week(inputs)
	if (locale === "it") return it_explore_compare_row_downloads_week(inputs)
	if (locale === "nl") return nl_explore_compare_row_downloads_week(inputs)
	if (locale === "pl") return pl_explore_compare_row_downloads_week(inputs)
	if (locale === "pt") return pt_explore_compare_row_downloads_week(inputs)
	if (locale === "ru") return ru_explore_compare_row_downloads_week(inputs)
	if (locale === "sv") return sv_explore_compare_row_downloads_week(inputs)
	if (locale === "tr") return tr_explore_compare_row_downloads_week(inputs)
	if (locale === "zh") return zh_explore_compare_row_downloads_week(inputs)
	if (locale === "ja") return ja_explore_compare_row_downloads_week(inputs)
	return en_explore_compare_row_downloads_week(inputs)
});

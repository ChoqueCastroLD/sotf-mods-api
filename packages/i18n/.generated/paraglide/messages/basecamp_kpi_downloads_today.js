/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kpi_Downloads_TodayInputs */

const en_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads today`)
};

const es_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas hoy`)
};

const de_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads heute`)
};

const fr_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements aujourd'hui`)
};

const it_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download di oggi`)
};

const nl_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads vandaag`)
};

const pl_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania dzisiaj`)
};

const pt_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads hoje`)
};

const ru_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки сегодня`)
};

const sv_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar idag`)
};

const tr_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugünkü indirmeler`)
};

const zh_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日下载量`)
};

const ja_basecamp_kpi_downloads_today = /** @type {(inputs: Basecamp_Kpi_Downloads_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本日のダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads today" |
*
* @param {Basecamp_Kpi_Downloads_TodayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_downloads_today = /** @type {((inputs?: Basecamp_Kpi_Downloads_TodayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Downloads_TodayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_downloads_today(inputs)
	if (locale === "de") return de_basecamp_kpi_downloads_today(inputs)
	if (locale === "fr") return fr_basecamp_kpi_downloads_today(inputs)
	if (locale === "it") return it_basecamp_kpi_downloads_today(inputs)
	if (locale === "nl") return nl_basecamp_kpi_downloads_today(inputs)
	if (locale === "pl") return pl_basecamp_kpi_downloads_today(inputs)
	if (locale === "pt") return pt_basecamp_kpi_downloads_today(inputs)
	if (locale === "ru") return ru_basecamp_kpi_downloads_today(inputs)
	if (locale === "sv") return sv_basecamp_kpi_downloads_today(inputs)
	if (locale === "tr") return tr_basecamp_kpi_downloads_today(inputs)
	if (locale === "zh") return zh_basecamp_kpi_downloads_today(inputs)
	if (locale === "ja") return ja_basecamp_kpi_downloads_today(inputs)
	return en_basecamp_kpi_downloads_today(inputs)
});

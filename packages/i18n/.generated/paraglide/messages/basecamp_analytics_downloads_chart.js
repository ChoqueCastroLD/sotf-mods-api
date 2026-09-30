/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Downloads_ChartInputs */

const en_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total and unique downloads`)
};

const es_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas totales y únicas`)
};

const de_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesamte und eindeutige Downloads`)
};

const fr_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements totaux et uniques`)
};

const it_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download totali e unici`)
};

const nl_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totale en unieke downloads`)
};

const pl_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie i unikalne pobrania`)
};

const pt_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads totais e únicos`)
};

const ru_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все и уникальные загрузки`)
};

const sv_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totala och unika nedladdningar`)
};

const tr_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toplam ve tekil indirmeler`)
};

const zh_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`总下载量与独立下载量`)
};

const ja_basecamp_analytics_downloads_chart = /** @type {(inputs: Basecamp_Analytics_Downloads_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合計とユニークのダウンロード`)
};

/**
* | output |
* | --- |
* | "Total and unique downloads" |
*
* @param {Basecamp_Analytics_Downloads_ChartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_downloads_chart = /** @type {((inputs?: Basecamp_Analytics_Downloads_ChartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Downloads_ChartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_downloads_chart(inputs)
	if (locale === "de") return de_basecamp_analytics_downloads_chart(inputs)
	if (locale === "fr") return fr_basecamp_analytics_downloads_chart(inputs)
	if (locale === "it") return it_basecamp_analytics_downloads_chart(inputs)
	if (locale === "nl") return nl_basecamp_analytics_downloads_chart(inputs)
	if (locale === "pl") return pl_basecamp_analytics_downloads_chart(inputs)
	if (locale === "pt") return pt_basecamp_analytics_downloads_chart(inputs)
	if (locale === "ru") return ru_basecamp_analytics_downloads_chart(inputs)
	if (locale === "sv") return sv_basecamp_analytics_downloads_chart(inputs)
	if (locale === "tr") return tr_basecamp_analytics_downloads_chart(inputs)
	if (locale === "zh") return zh_basecamp_analytics_downloads_chart(inputs)
	if (locale === "ja") return ja_basecamp_analytics_downloads_chart(inputs)
	return en_basecamp_analytics_downloads_chart(inputs)
});

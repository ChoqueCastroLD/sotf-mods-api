/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Versions_ChartInputs */

const en_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads by version`)
};

const es_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas por versión`)
};

const de_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads nach Version`)
};

const fr_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements par version`)
};

const it_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download per versione`)
};

const nl_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads per versie`)
};

const pl_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania według wersji`)
};

const pt_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads por versão`)
};

const ru_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки по версиям`)
};

const sv_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar per version`)
};

const tr_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüme göre indirmeler`)
};

const zh_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各版本下载量`)
};

const ja_basecamp_analytics_versions_chart = /** @type {(inputs: Basecamp_Analytics_Versions_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン別のダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads by version" |
*
* @param {Basecamp_Analytics_Versions_ChartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_versions_chart = /** @type {((inputs?: Basecamp_Analytics_Versions_ChartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Versions_ChartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_versions_chart(inputs)
	if (locale === "de") return de_basecamp_analytics_versions_chart(inputs)
	if (locale === "fr") return fr_basecamp_analytics_versions_chart(inputs)
	if (locale === "it") return it_basecamp_analytics_versions_chart(inputs)
	if (locale === "nl") return nl_basecamp_analytics_versions_chart(inputs)
	if (locale === "pl") return pl_basecamp_analytics_versions_chart(inputs)
	if (locale === "pt") return pt_basecamp_analytics_versions_chart(inputs)
	if (locale === "ru") return ru_basecamp_analytics_versions_chart(inputs)
	if (locale === "sv") return sv_basecamp_analytics_versions_chart(inputs)
	if (locale === "tr") return tr_basecamp_analytics_versions_chart(inputs)
	if (locale === "zh") return zh_basecamp_analytics_versions_chart(inputs)
	if (locale === "ja") return ja_basecamp_analytics_versions_chart(inputs)
	return en_basecamp_analytics_versions_chart(inputs)
});

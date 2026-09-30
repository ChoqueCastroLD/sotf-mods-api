/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Versions_DailyInputs */

const en_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads per version over time`)
};

const es_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas por versión en el tiempo`)
};

const de_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads pro Version im Zeitverlauf`)
};

const fr_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements par version dans le temps`)
};

const it_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download per versione nel tempo`)
};

const nl_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads per versie door de tijd`)
};

const pl_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania według wersji w czasie`)
};

const pt_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads por versão ao longo do tempo`)
};

const ru_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки по версиям во времени`)
};

const sv_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar per version över tid`)
};

const tr_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaman içinde sürüm başına indirmeler`)
};

const zh_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各版本下载量趋势`)
};

const ja_basecamp_analytics_versions_daily = /** @type {(inputs: Basecamp_Analytics_Versions_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン別ダウンロードの推移`)
};

/**
* | output |
* | --- |
* | "Downloads per version over time" |
*
* @param {Basecamp_Analytics_Versions_DailyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_versions_daily = /** @type {((inputs?: Basecamp_Analytics_Versions_DailyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Versions_DailyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_versions_daily(inputs)
	if (locale === "de") return de_basecamp_analytics_versions_daily(inputs)
	if (locale === "fr") return fr_basecamp_analytics_versions_daily(inputs)
	if (locale === "it") return it_basecamp_analytics_versions_daily(inputs)
	if (locale === "nl") return nl_basecamp_analytics_versions_daily(inputs)
	if (locale === "pl") return pl_basecamp_analytics_versions_daily(inputs)
	if (locale === "pt") return pt_basecamp_analytics_versions_daily(inputs)
	if (locale === "ru") return ru_basecamp_analytics_versions_daily(inputs)
	if (locale === "sv") return sv_basecamp_analytics_versions_daily(inputs)
	if (locale === "tr") return tr_basecamp_analytics_versions_daily(inputs)
	if (locale === "zh") return zh_basecamp_analytics_versions_daily(inputs)
	if (locale === "ja") return ja_basecamp_analytics_versions_daily(inputs)
	return en_basecamp_analytics_versions_daily(inputs)
});

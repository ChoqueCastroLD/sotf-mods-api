/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Downloads_TitleInputs */

const en_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads over time`)
};

const es_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas en el tiempo`)
};

const de_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads im Zeitverlauf`)
};

const fr_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements dans le temps`)
};

const it_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download nel tempo`)
};

const nl_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads door de tijd`)
};

const pl_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania w czasie`)
};

const pt_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads ao longo do tempo`)
};

const ru_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки во времени`)
};

const sv_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar över tid`)
};

const tr_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaman içinde indirmeler`)
};

const zh_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载趋势`)
};

const ja_basecamp_analytics_downloads_title = /** @type {(inputs: Basecamp_Analytics_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードの推移`)
};

/**
* | output |
* | --- |
* | "Downloads over time" |
*
* @param {Basecamp_Analytics_Downloads_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_downloads_title = /** @type {((inputs?: Basecamp_Analytics_Downloads_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Downloads_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_downloads_title(inputs)
	if (locale === "de") return de_basecamp_analytics_downloads_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_downloads_title(inputs)
	if (locale === "it") return it_basecamp_analytics_downloads_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_downloads_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_downloads_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_downloads_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_downloads_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_downloads_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_downloads_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_downloads_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_downloads_title(inputs)
	return en_basecamp_analytics_downloads_title(inputs)
});

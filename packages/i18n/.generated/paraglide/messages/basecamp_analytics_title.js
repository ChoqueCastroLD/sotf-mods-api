/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_TitleInputs */

const en_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analytics`)
};

const es_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analíticas`)
};

const de_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiken`)
};

const fr_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiques`)
};

const it_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiche`)
};

const nl_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistieken`)
};

const pl_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statystyki`)
};

const pt_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estatísticas`)
};

const ru_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статистика`)
};

const sv_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistik`)
};

const tr_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstatistikler`)
};

const zh_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数据分析`)
};

const ja_basecamp_analytics_title = /** @type {(inputs: Basecamp_Analytics_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分析`)
};

/**
* | output |
* | --- |
* | "Analytics" |
*
* @param {Basecamp_Analytics_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_title = /** @type {((inputs?: Basecamp_Analytics_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_title(inputs)
	if (locale === "de") return de_basecamp_analytics_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_title(inputs)
	if (locale === "it") return it_basecamp_analytics_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_title(inputs)
	return en_basecamp_analytics_title(inputs)
});

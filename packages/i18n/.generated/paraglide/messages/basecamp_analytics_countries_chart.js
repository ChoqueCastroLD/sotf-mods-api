/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Countries_ChartInputs */

const en_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visits by country`)
};

const es_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas por país`)
};

const de_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besuche nach Land`)
};

const fr_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visites par pays`)
};

const it_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visite per paese`)
};

const nl_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezoeken per land`)
};

const pl_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odwiedziny według kraju`)
};

const pt_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas por país`)
};

const ru_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посещения по странам`)
};

const sv_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besök per land`)
};

const tr_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ülkeye göre ziyaretler`)
};

const zh_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按国家/地区统计的访问量`)
};

const ja_basecamp_analytics_countries_chart = /** @type {(inputs: Basecamp_Analytics_Countries_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`国別の訪問数`)
};

/**
* | output |
* | --- |
* | "Visits by country" |
*
* @param {Basecamp_Analytics_Countries_ChartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_countries_chart = /** @type {((inputs?: Basecamp_Analytics_Countries_ChartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Countries_ChartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_countries_chart(inputs)
	if (locale === "de") return de_basecamp_analytics_countries_chart(inputs)
	if (locale === "fr") return fr_basecamp_analytics_countries_chart(inputs)
	if (locale === "it") return it_basecamp_analytics_countries_chart(inputs)
	if (locale === "nl") return nl_basecamp_analytics_countries_chart(inputs)
	if (locale === "pl") return pl_basecamp_analytics_countries_chart(inputs)
	if (locale === "pt") return pt_basecamp_analytics_countries_chart(inputs)
	if (locale === "ru") return ru_basecamp_analytics_countries_chart(inputs)
	if (locale === "sv") return sv_basecamp_analytics_countries_chart(inputs)
	if (locale === "tr") return tr_basecamp_analytics_countries_chart(inputs)
	if (locale === "zh") return zh_basecamp_analytics_countries_chart(inputs)
	if (locale === "ja") return ja_basecamp_analytics_countries_chart(inputs)
	return en_basecamp_analytics_countries_chart(inputs)
});

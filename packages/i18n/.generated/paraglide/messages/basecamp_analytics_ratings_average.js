/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Ratings_AverageInputs */

const en_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Average rating`)
};

const es_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valoración media`)
};

const de_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durchschnittliche Bewertung`)
};

const fr_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note moyenne`)
};

const it_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valutazione media`)
};

const nl_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemiddelde beoordeling`)
};

const pl_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Średnia ocena`)
};

const pt_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação média`)
};

const ru_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Средняя оценка`)
};

const sv_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genomsnittligt betyg`)
};

const tr_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortalama puan`)
};

const zh_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平均评分`)
};

const ja_basecamp_analytics_ratings_average = /** @type {(inputs: Basecamp_Analytics_Ratings_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平均評価`)
};

/**
* | output |
* | --- |
* | "Average rating" |
*
* @param {Basecamp_Analytics_Ratings_AverageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_ratings_average = /** @type {((inputs?: Basecamp_Analytics_Ratings_AverageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Ratings_AverageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_ratings_average(inputs)
	if (locale === "de") return de_basecamp_analytics_ratings_average(inputs)
	if (locale === "fr") return fr_basecamp_analytics_ratings_average(inputs)
	if (locale === "it") return it_basecamp_analytics_ratings_average(inputs)
	if (locale === "nl") return nl_basecamp_analytics_ratings_average(inputs)
	if (locale === "pl") return pl_basecamp_analytics_ratings_average(inputs)
	if (locale === "pt") return pt_basecamp_analytics_ratings_average(inputs)
	if (locale === "ru") return ru_basecamp_analytics_ratings_average(inputs)
	if (locale === "sv") return sv_basecamp_analytics_ratings_average(inputs)
	if (locale === "tr") return tr_basecamp_analytics_ratings_average(inputs)
	if (locale === "zh") return zh_basecamp_analytics_ratings_average(inputs)
	if (locale === "ja") return ja_basecamp_analytics_ratings_average(inputs)
	return en_basecamp_analytics_ratings_average(inputs)
});

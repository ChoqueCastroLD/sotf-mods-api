/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_No_RatingsInputs */

const en_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reviews in this period.`)
};

const es_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay reseñas en este periodo.`)
};

const de_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Bewertungen in diesem Zeitraum.`)
};

const fr_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun avis sur cette période.`)
};

const it_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna recensione in questo periodo.`)
};

const nl_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen reviews in deze periode.`)
};

const pl_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak recenzji w tym okresie.`)
};

const pt_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma avaliação neste período.`)
};

const ru_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За этот период отзывов нет.`)
};

const sv_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga recensioner under perioden.`)
};

const tr_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dönemde inceleme yok.`)
};

const zh_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此期间没有评价。`)
};

const ja_basecamp_analytics_no_ratings = /** @type {(inputs: Basecamp_Analytics_No_RatingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この期間のレビューはありません。`)
};

/**
* | output |
* | --- |
* | "No reviews in this period." |
*
* @param {Basecamp_Analytics_No_RatingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_no_ratings = /** @type {((inputs?: Basecamp_Analytics_No_RatingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_No_RatingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_no_ratings(inputs)
	if (locale === "de") return de_basecamp_analytics_no_ratings(inputs)
	if (locale === "fr") return fr_basecamp_analytics_no_ratings(inputs)
	if (locale === "it") return it_basecamp_analytics_no_ratings(inputs)
	if (locale === "nl") return nl_basecamp_analytics_no_ratings(inputs)
	if (locale === "pl") return pl_basecamp_analytics_no_ratings(inputs)
	if (locale === "pt") return pt_basecamp_analytics_no_ratings(inputs)
	if (locale === "ru") return ru_basecamp_analytics_no_ratings(inputs)
	if (locale === "sv") return sv_basecamp_analytics_no_ratings(inputs)
	if (locale === "tr") return tr_basecamp_analytics_no_ratings(inputs)
	if (locale === "zh") return zh_basecamp_analytics_no_ratings(inputs)
	if (locale === "ja") return ja_basecamp_analytics_no_ratings(inputs)
	return en_basecamp_analytics_no_ratings(inputs)
});

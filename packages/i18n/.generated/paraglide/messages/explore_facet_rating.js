/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Facet_RatingInputs */

const en_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rating`)
};

const es_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valoración`)
};

const de_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung`)
};

const fr_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const it_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valutazione`)
};

const nl_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeling`)
};

const pl_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocena`)
};

const pt_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação`)
};

const ru_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оценка`)
};

const sv_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betyg`)
};

const tr_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puan`)
};

const zh_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分`)
};

const ja_explore_facet_rating = /** @type {(inputs: Explore_Facet_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価`)
};

/**
* | output |
* | --- |
* | "Rating" |
*
* @param {Explore_Facet_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_facet_rating = /** @type {((inputs?: Explore_Facet_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Facet_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_facet_rating(inputs)
	if (locale === "de") return de_explore_facet_rating(inputs)
	if (locale === "fr") return fr_explore_facet_rating(inputs)
	if (locale === "it") return it_explore_facet_rating(inputs)
	if (locale === "nl") return nl_explore_facet_rating(inputs)
	if (locale === "pl") return pl_explore_facet_rating(inputs)
	if (locale === "pt") return pt_explore_facet_rating(inputs)
	if (locale === "ru") return ru_explore_facet_rating(inputs)
	if (locale === "sv") return sv_explore_facet_rating(inputs)
	if (locale === "tr") return tr_explore_facet_rating(inputs)
	if (locale === "zh") return zh_explore_facet_rating(inputs)
	if (locale === "ja") return ja_explore_facet_rating(inputs)
	return en_explore_facet_rating(inputs)
});

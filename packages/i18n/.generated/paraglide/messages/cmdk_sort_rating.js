/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Sort_RatingInputs */

const en_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top rated`)
};

const es_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mejor valorados`)
};

const de_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beste Bewertung`)
};

const fr_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mieux notés`)
};

const it_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più votati`)
};

const nl_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoogst beoordeeld`)
};

const pl_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najwyżej oceniane`)
};

const pt_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais bem avaliados`)
};

const ru_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По рейтингу`)
};

const sv_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Högst betyg`)
};

const tr_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yüksek puanlı`)
};

const zh_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分最高`)
};

const ja_cmdk_sort_rating = /** @type {(inputs: Cmdk_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`高評価順`)
};

/**
* | output |
* | --- |
* | "Top rated" |
*
* @param {Cmdk_Sort_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_sort_rating = /** @type {((inputs?: Cmdk_Sort_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Sort_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_sort_rating(inputs)
	if (locale === "de") return de_cmdk_sort_rating(inputs)
	if (locale === "fr") return fr_cmdk_sort_rating(inputs)
	if (locale === "it") return it_cmdk_sort_rating(inputs)
	if (locale === "nl") return nl_cmdk_sort_rating(inputs)
	if (locale === "pl") return pl_cmdk_sort_rating(inputs)
	if (locale === "pt") return pt_cmdk_sort_rating(inputs)
	if (locale === "ru") return ru_cmdk_sort_rating(inputs)
	if (locale === "sv") return sv_cmdk_sort_rating(inputs)
	if (locale === "tr") return tr_cmdk_sort_rating(inputs)
	if (locale === "zh") return zh_cmdk_sort_rating(inputs)
	if (locale === "ja") return ja_cmdk_sort_rating(inputs)
	return en_cmdk_sort_rating(inputs)
});

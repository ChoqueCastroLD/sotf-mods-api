/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_RatingInputs */

const en_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rating`)
};

const es_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valoración`)
};

const de_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung`)
};

const fr_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const it_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valutazione`)
};

const nl_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeling`)
};

const pl_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocena`)
};

const pt_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação`)
};

const ru_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейтинг`)
};

const sv_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betyg`)
};

const tr_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puan`)
};

const zh_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分`)
};

const ja_cmdk_fact_rating = /** @type {(inputs: Cmdk_Fact_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価`)
};

/**
* | output |
* | --- |
* | "Rating" |
*
* @param {Cmdk_Fact_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_rating = /** @type {((inputs?: Cmdk_Fact_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_rating(inputs)
	if (locale === "de") return de_cmdk_fact_rating(inputs)
	if (locale === "fr") return fr_cmdk_fact_rating(inputs)
	if (locale === "it") return it_cmdk_fact_rating(inputs)
	if (locale === "nl") return nl_cmdk_fact_rating(inputs)
	if (locale === "pl") return pl_cmdk_fact_rating(inputs)
	if (locale === "pt") return pt_cmdk_fact_rating(inputs)
	if (locale === "ru") return ru_cmdk_fact_rating(inputs)
	if (locale === "sv") return sv_cmdk_fact_rating(inputs)
	if (locale === "tr") return tr_cmdk_fact_rating(inputs)
	if (locale === "zh") return zh_cmdk_fact_rating(inputs)
	if (locale === "ja") return ja_cmdk_fact_rating(inputs)
	return en_cmdk_fact_rating(inputs)
});

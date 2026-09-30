/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_WriteInputs */

const en_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write a review`)
};

const es_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribir una reseña`)
};

const de_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung schreiben`)
};

const fr_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire un avis`)
};

const it_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi una recensione`)
};

const nl_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf een review`)
};

const pl_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz recenzję`)
};

const pt_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrever uma avaliação`)
};

const ru_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Написать отзыв`)
};

const sv_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv en recension`)
};

const tr_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme yaz`)
};

const zh_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写评价`)
};

const ja_social_review_write = /** @type {(inputs: Social_Review_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを書く`)
};

/**
* | output |
* | --- |
* | "Write a review" |
*
* @param {Social_Review_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_write = /** @type {((inputs?: Social_Review_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_write(inputs)
	if (locale === "de") return de_social_review_write(inputs)
	if (locale === "fr") return fr_social_review_write(inputs)
	if (locale === "it") return it_social_review_write(inputs)
	if (locale === "nl") return nl_social_review_write(inputs)
	if (locale === "pl") return pl_social_review_write(inputs)
	if (locale === "pt") return pt_social_review_write(inputs)
	if (locale === "ru") return ru_social_review_write(inputs)
	if (locale === "sv") return sv_social_review_write(inputs)
	if (locale === "tr") return tr_social_review_write(inputs)
	if (locale === "zh") return zh_social_review_write(inputs)
	if (locale === "ja") return ja_social_review_write(inputs)
	return en_social_review_write(inputs)
});

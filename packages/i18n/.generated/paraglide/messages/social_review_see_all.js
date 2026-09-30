/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_See_AllInputs */

const en_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See all reviews`)
};

const es_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todas las reseñas`)
};

const de_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Bewertungen ansehen`)
};

const fr_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir tous les avis`)
};

const it_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi tutte le recensioni`)
};

const nl_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle reviews bekijken`)
};

const pl_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wszystkie recenzje`)
};

const pt_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todas as avaliações`)
};

const ru_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все отзывы`)
};

const sv_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alla recensioner`)
};

const tr_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm incelemeleri gör`)
};

const zh_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看全部评价`)
};

const ja_social_review_see_all = /** @type {(inputs: Social_Review_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのレビューを見る`)
};

/**
* | output |
* | --- |
* | "See all reviews" |
*
* @param {Social_Review_See_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_see_all = /** @type {((inputs?: Social_Review_See_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_See_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_see_all(inputs)
	if (locale === "de") return de_social_review_see_all(inputs)
	if (locale === "fr") return fr_social_review_see_all(inputs)
	if (locale === "it") return it_social_review_see_all(inputs)
	if (locale === "nl") return nl_social_review_see_all(inputs)
	if (locale === "pl") return pl_social_review_see_all(inputs)
	if (locale === "pt") return pt_social_review_see_all(inputs)
	if (locale === "ru") return ru_social_review_see_all(inputs)
	if (locale === "sv") return sv_social_review_see_all(inputs)
	if (locale === "tr") return tr_social_review_see_all(inputs)
	if (locale === "zh") return zh_social_review_see_all(inputs)
	if (locale === "ja") return ja_social_review_see_all(inputs)
	return en_social_review_see_all(inputs)
});

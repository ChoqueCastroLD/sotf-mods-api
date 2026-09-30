/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_ReviewsInputs */

const en_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const es_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseñas`)
};

const de_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rezensionen`)
};

const fr_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis`)
};

const it_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioni`)
};

const nl_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensies`)
};

const pl_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzje`)
};

const pt_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliações`)
};

const ru_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы`)
};

const sv_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioner`)
};

const tr_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeler`)
};

const zh_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价`)
};

const ja_ranger_user_reviews = /** @type {(inputs: Ranger_User_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー`)
};

/**
* | output |
* | --- |
* | "Reviews" |
*
* @param {Ranger_User_ReviewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_reviews = /** @type {((inputs?: Ranger_User_ReviewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_ReviewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_reviews(inputs)
	if (locale === "de") return de_ranger_user_reviews(inputs)
	if (locale === "fr") return fr_ranger_user_reviews(inputs)
	if (locale === "it") return it_ranger_user_reviews(inputs)
	if (locale === "nl") return nl_ranger_user_reviews(inputs)
	if (locale === "pl") return pl_ranger_user_reviews(inputs)
	if (locale === "pt") return pt_ranger_user_reviews(inputs)
	if (locale === "ru") return ru_ranger_user_reviews(inputs)
	if (locale === "sv") return sv_ranger_user_reviews(inputs)
	if (locale === "tr") return tr_ranger_user_reviews(inputs)
	if (locale === "zh") return zh_ranger_user_reviews(inputs)
	if (locale === "ja") return ja_ranger_user_reviews(inputs)
	return en_ranger_user_reviews(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Kind_ReviewsInputs */

const en_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const es_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseñas`)
};

const de_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertungen`)
};

const fr_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis`)
};

const it_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioni`)
};

const nl_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const pl_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzje`)
};

const pt_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliações`)
};

const ru_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы`)
};

const sv_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioner`)
};

const tr_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeler`)
};

const zh_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价`)
};

const ja_profile_activity_kind_reviews = /** @type {(inputs: Profile_Activity_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー`)
};

/**
* | output |
* | --- |
* | "Reviews" |
*
* @param {Profile_Activity_Kind_ReviewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_kind_reviews = /** @type {((inputs?: Profile_Activity_Kind_ReviewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Kind_ReviewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_kind_reviews(inputs)
	if (locale === "de") return de_profile_activity_kind_reviews(inputs)
	if (locale === "fr") return fr_profile_activity_kind_reviews(inputs)
	if (locale === "it") return it_profile_activity_kind_reviews(inputs)
	if (locale === "nl") return nl_profile_activity_kind_reviews(inputs)
	if (locale === "pl") return pl_profile_activity_kind_reviews(inputs)
	if (locale === "pt") return pt_profile_activity_kind_reviews(inputs)
	if (locale === "ru") return ru_profile_activity_kind_reviews(inputs)
	if (locale === "sv") return sv_profile_activity_kind_reviews(inputs)
	if (locale === "tr") return tr_profile_activity_kind_reviews(inputs)
	if (locale === "zh") return zh_profile_activity_kind_reviews(inputs)
	if (locale === "ja") return ja_profile_activity_kind_reviews(inputs)
	return en_profile_activity_kind_reviews(inputs)
});

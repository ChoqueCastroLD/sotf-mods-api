/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Reviews_PaginationInputs */

const en_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More reviews`)
};

const es_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más reseñas`)
};

const de_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Bewertungen`)
};

const fr_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’avis`)
};

const it_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre recensioni`)
};

const nl_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer reviews`)
};

const pl_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej recenzji`)
};

const pt_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais avaliações`)
};

const ru_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ещё отзывы`)
};

const sv_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler recensioner`)
};

const tr_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla inceleme`)
};

const zh_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多评价`)
};

const ja_profile_reviews_pagination = /** @type {(inputs: Profile_Reviews_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`さらにレビューを表示`)
};

/**
* | output |
* | --- |
* | "More reviews" |
*
* @param {Profile_Reviews_PaginationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_reviews_pagination = /** @type {((inputs?: Profile_Reviews_PaginationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Reviews_PaginationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_reviews_pagination(inputs)
	if (locale === "de") return de_profile_reviews_pagination(inputs)
	if (locale === "fr") return fr_profile_reviews_pagination(inputs)
	if (locale === "it") return it_profile_reviews_pagination(inputs)
	if (locale === "nl") return nl_profile_reviews_pagination(inputs)
	if (locale === "pl") return pl_profile_reviews_pagination(inputs)
	if (locale === "pt") return pt_profile_reviews_pagination(inputs)
	if (locale === "ru") return ru_profile_reviews_pagination(inputs)
	if (locale === "sv") return sv_profile_reviews_pagination(inputs)
	if (locale === "tr") return tr_profile_reviews_pagination(inputs)
	if (locale === "zh") return zh_profile_reviews_pagination(inputs)
	if (locale === "ja") return ja_profile_reviews_pagination(inputs)
	return en_profile_reviews_pagination(inputs)
});

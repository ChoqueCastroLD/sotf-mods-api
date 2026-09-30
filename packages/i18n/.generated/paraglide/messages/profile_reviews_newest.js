/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Reviews_NewestInputs */

const en_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest reviews`)
};

const es_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseñas más recientes`)
};

const de_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste Bewertungen`)
};

const fr_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis les plus récents`)
};

const it_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioni più recenti`)
};

const nl_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste reviews`)
};

const pl_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze recenzje`)
};

const pt_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliações mais recentes`)
};

const ru_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые отзывы`)
};

const sv_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyaste recensionerna`)
};

const tr_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni incelemeler`)
};

const zh_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新评价`)
};

const ja_profile_reviews_newest = /** @type {(inputs: Profile_Reviews_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新のレビュー`)
};

/**
* | output |
* | --- |
* | "Newest reviews" |
*
* @param {Profile_Reviews_NewestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_reviews_newest = /** @type {((inputs?: Profile_Reviews_NewestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Reviews_NewestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_reviews_newest(inputs)
	if (locale === "de") return de_profile_reviews_newest(inputs)
	if (locale === "fr") return fr_profile_reviews_newest(inputs)
	if (locale === "it") return it_profile_reviews_newest(inputs)
	if (locale === "nl") return nl_profile_reviews_newest(inputs)
	if (locale === "pl") return pl_profile_reviews_newest(inputs)
	if (locale === "pt") return pt_profile_reviews_newest(inputs)
	if (locale === "ru") return ru_profile_reviews_newest(inputs)
	if (locale === "sv") return sv_profile_reviews_newest(inputs)
	if (locale === "tr") return tr_profile_reviews_newest(inputs)
	if (locale === "zh") return zh_profile_reviews_newest(inputs)
	if (locale === "ja") return ja_profile_reviews_newest(inputs)
	return en_profile_reviews_newest(inputs)
});

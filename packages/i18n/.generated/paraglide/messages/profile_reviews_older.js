/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Reviews_OlderInputs */

const en_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Older reviews`)
};

const es_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseñas anteriores`)
};

const de_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ältere Bewertungen`)
};

const fr_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis plus anciens`)
};

const it_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioni precedenti`)
};

const nl_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudere reviews`)
};

const pl_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starsze recenzje`)
};

const pt_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliações anteriores`)
};

const ru_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Более старые отзывы`)
};

const sv_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldre recensioner`)
};

const tr_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha eski incelemeler`)
};

const zh_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更早的评价`)
};

const ja_profile_reviews_older = /** @type {(inputs: Profile_Reviews_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以前のレビュー`)
};

/**
* | output |
* | --- |
* | "Older reviews" |
*
* @param {Profile_Reviews_OlderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_reviews_older = /** @type {((inputs?: Profile_Reviews_OlderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Reviews_OlderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_reviews_older(inputs)
	if (locale === "de") return de_profile_reviews_older(inputs)
	if (locale === "fr") return fr_profile_reviews_older(inputs)
	if (locale === "it") return it_profile_reviews_older(inputs)
	if (locale === "nl") return nl_profile_reviews_older(inputs)
	if (locale === "pl") return pl_profile_reviews_older(inputs)
	if (locale === "pt") return pt_profile_reviews_older(inputs)
	if (locale === "ru") return ru_profile_reviews_older(inputs)
	if (locale === "sv") return sv_profile_reviews_older(inputs)
	if (locale === "tr") return tr_profile_reviews_older(inputs)
	if (locale === "zh") return zh_profile_reviews_older(inputs)
	if (locale === "ja") return ja_profile_reviews_older(inputs)
	return en_profile_reviews_older(inputs)
});

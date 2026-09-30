/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Reviews_TitleInputs */

const en_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const es_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseñas`)
};

const de_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertungen`)
};

const fr_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis`)
};

const it_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioni`)
};

const nl_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const pl_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzje`)
};

const pt_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliações`)
};

const ru_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы`)
};

const sv_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioner`)
};

const tr_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeler`)
};

const zh_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价`)
};

const ja_builds_reviews_title = /** @type {(inputs: Builds_Reviews_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー`)
};

/**
* | output |
* | --- |
* | "Reviews" |
*
* @param {Builds_Reviews_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_reviews_title = /** @type {((inputs?: Builds_Reviews_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Reviews_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_reviews_title(inputs)
	if (locale === "de") return de_builds_reviews_title(inputs)
	if (locale === "fr") return fr_builds_reviews_title(inputs)
	if (locale === "it") return it_builds_reviews_title(inputs)
	if (locale === "nl") return nl_builds_reviews_title(inputs)
	if (locale === "pl") return pl_builds_reviews_title(inputs)
	if (locale === "pt") return pt_builds_reviews_title(inputs)
	if (locale === "ru") return ru_builds_reviews_title(inputs)
	if (locale === "sv") return sv_builds_reviews_title(inputs)
	if (locale === "tr") return tr_builds_reviews_title(inputs)
	if (locale === "zh") return zh_builds_reviews_title(inputs)
	if (locale === "ja") return ja_builds_reviews_title(inputs)
	return en_builds_reviews_title(inputs)
});

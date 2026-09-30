/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_Next_PageInputs */

const en_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More reviews`)
};

const es_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más reseñas`)
};

const de_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Bewertungen`)
};

const fr_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’avis`)
};

const it_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre recensioni`)
};

const nl_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer reviews`)
};

const pl_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej recenzji`)
};

const pt_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais avaliações`)
};

const ru_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ещё отзывы`)
};

const sv_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler recensioner`)
};

const tr_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla inceleme`)
};

const zh_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多评价`)
};

const ja_mod_reviews_next_page = /** @type {(inputs: Mod_Reviews_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`さらにレビューを見る`)
};

/**
* | output |
* | --- |
* | "More reviews" |
*
* @param {Mod_Reviews_Next_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_next_page = /** @type {((inputs?: Mod_Reviews_Next_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_Next_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_next_page(inputs)
	if (locale === "de") return de_mod_reviews_next_page(inputs)
	if (locale === "fr") return fr_mod_reviews_next_page(inputs)
	if (locale === "it") return it_mod_reviews_next_page(inputs)
	if (locale === "nl") return nl_mod_reviews_next_page(inputs)
	if (locale === "pl") return pl_mod_reviews_next_page(inputs)
	if (locale === "pt") return pt_mod_reviews_next_page(inputs)
	if (locale === "ru") return ru_mod_reviews_next_page(inputs)
	if (locale === "sv") return sv_mod_reviews_next_page(inputs)
	if (locale === "tr") return tr_mod_reviews_next_page(inputs)
	if (locale === "zh") return zh_mod_reviews_next_page(inputs)
	if (locale === "ja") return ja_mod_reviews_next_page(inputs)
	return en_mod_reviews_next_page(inputs)
});

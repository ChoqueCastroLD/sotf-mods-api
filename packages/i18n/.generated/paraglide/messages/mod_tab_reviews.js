/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Tab_ReviewsInputs */

const en_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const es_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseñas`)
};

const de_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertungen`)
};

const fr_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis`)
};

const it_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioni`)
};

const nl_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const pl_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzje`)
};

const pt_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliações`)
};

const ru_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы`)
};

const sv_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioner`)
};

const tr_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeler`)
};

const zh_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价`)
};

const ja_mod_tab_reviews = /** @type {(inputs: Mod_Tab_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー`)
};

/**
* | output |
* | --- |
* | "Reviews" |
*
* @param {Mod_Tab_ReviewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_tab_reviews = /** @type {((inputs?: Mod_Tab_ReviewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Tab_ReviewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_tab_reviews(inputs)
	if (locale === "de") return de_mod_tab_reviews(inputs)
	if (locale === "fr") return fr_mod_tab_reviews(inputs)
	if (locale === "it") return it_mod_tab_reviews(inputs)
	if (locale === "nl") return nl_mod_tab_reviews(inputs)
	if (locale === "pl") return pl_mod_tab_reviews(inputs)
	if (locale === "pt") return pt_mod_tab_reviews(inputs)
	if (locale === "ru") return ru_mod_tab_reviews(inputs)
	if (locale === "sv") return sv_mod_tab_reviews(inputs)
	if (locale === "tr") return tr_mod_tab_reviews(inputs)
	if (locale === "zh") return zh_mod_tab_reviews(inputs)
	if (locale === "ja") return ja_mod_tab_reviews(inputs)
	return en_mod_tab_reviews(inputs)
});

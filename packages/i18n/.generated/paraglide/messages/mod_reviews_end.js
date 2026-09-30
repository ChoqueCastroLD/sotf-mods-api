/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_EndInputs */

const en_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That’s all the reviews.`)
};

const es_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay más reseñas.`)
};

const de_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das waren alle Bewertungen.`)
};

const fr_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est tout pour les avis.`)
};

const it_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ci sono altre recensioni.`)
};

const nl_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat waren alle reviews.`)
};

const pl_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To wszystkie recenzje.`)
};

const pt_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essas são todas as avaliações.`)
};

const ru_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это все отзывы.`)
};

const sv_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det var alla recensioner.`)
};

const tr_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm incelemeler bu kadar.`)
};

const zh_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价已经全部看完了。`)
};

const ja_mod_reviews_end = /** @type {(inputs: Mod_Reviews_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューは以上です。`)
};

/**
* | output |
* | --- |
* | "That’s all the reviews." |
*
* @param {Mod_Reviews_EndInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_end = /** @type {((inputs?: Mod_Reviews_EndInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_EndInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_end(inputs)
	if (locale === "de") return de_mod_reviews_end(inputs)
	if (locale === "fr") return fr_mod_reviews_end(inputs)
	if (locale === "it") return it_mod_reviews_end(inputs)
	if (locale === "nl") return nl_mod_reviews_end(inputs)
	if (locale === "pl") return pl_mod_reviews_end(inputs)
	if (locale === "pt") return pt_mod_reviews_end(inputs)
	if (locale === "ru") return ru_mod_reviews_end(inputs)
	if (locale === "sv") return sv_mod_reviews_end(inputs)
	if (locale === "tr") return tr_mod_reviews_end(inputs)
	if (locale === "zh") return zh_mod_reviews_end(inputs)
	if (locale === "ja") return ja_mod_reviews_end(inputs)
	return en_mod_reviews_end(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_WriteInputs */

const en_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write a review`)
};

const es_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribir una reseña`)
};

const de_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung schreiben`)
};

const fr_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire un avis`)
};

const it_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi una recensione`)
};

const nl_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf een review`)
};

const pl_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz recenzję`)
};

const pt_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrever uma avaliação`)
};

const ru_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Написать отзыв`)
};

const sv_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv en recension`)
};

const tr_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme yaz`)
};

const zh_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写评价`)
};

const ja_mod_reviews_write = /** @type {(inputs: Mod_Reviews_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを書く`)
};

/**
* | output |
* | --- |
* | "Write a review" |
*
* @param {Mod_Reviews_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_write = /** @type {((inputs?: Mod_Reviews_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_write(inputs)
	if (locale === "de") return de_mod_reviews_write(inputs)
	if (locale === "fr") return fr_mod_reviews_write(inputs)
	if (locale === "it") return it_mod_reviews_write(inputs)
	if (locale === "nl") return nl_mod_reviews_write(inputs)
	if (locale === "pl") return pl_mod_reviews_write(inputs)
	if (locale === "pt") return pt_mod_reviews_write(inputs)
	if (locale === "ru") return ru_mod_reviews_write(inputs)
	if (locale === "sv") return sv_mod_reviews_write(inputs)
	if (locale === "tr") return tr_mod_reviews_write(inputs)
	if (locale === "zh") return zh_mod_reviews_write(inputs)
	if (locale === "ja") return ja_mod_reviews_write(inputs)
	return en_mod_reviews_write(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_EmptyInputs */

const en_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reviews yet. Be the first to review this mod.`)
};

const es_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay reseñas. Sé el primero en escribir una.`)
};

const de_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Bewertungen. Schreib die erste Bewertung zu diesem Mod.`)
};

const fr_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore d’avis. Soyez le premier à en écrire un.`)
};

const it_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna recensione. Scrivi tu la prima.`)
};

const nl_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reviews. Schrijf als eerste een review.`)
};

const pl_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak recenzji. Napisz pierwszą.`)
};

const pt_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há avaliações. Seja o primeiro a escrever uma.`)
};

const ru_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывов пока нет. Напишите первый.`)
};

const sv_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga recensioner än. Skriv den första.`)
};

const tr_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz inceleme yok. İlk incelemeyi sen yaz.`)
};

const zh_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评价。来写第一条吧。`)
};

const ja_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだレビューはありません。最初のレビューを書いてみてください。`)
};

/**
* | output |
* | --- |
* | "No reviews yet. Be the first to review this mod." |
*
* @param {Mod_Reviews_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_empty = /** @type {((inputs?: Mod_Reviews_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_empty(inputs)
	if (locale === "de") return de_mod_reviews_empty(inputs)
	if (locale === "fr") return fr_mod_reviews_empty(inputs)
	if (locale === "it") return it_mod_reviews_empty(inputs)
	if (locale === "nl") return nl_mod_reviews_empty(inputs)
	if (locale === "pl") return pl_mod_reviews_empty(inputs)
	if (locale === "pt") return pt_mod_reviews_empty(inputs)
	if (locale === "ru") return ru_mod_reviews_empty(inputs)
	if (locale === "sv") return sv_mod_reviews_empty(inputs)
	if (locale === "tr") return tr_mod_reviews_empty(inputs)
	if (locale === "zh") return zh_mod_reviews_empty(inputs)
	if (locale === "ja") return ja_mod_reviews_empty(inputs)
	return en_mod_reviews_empty(inputs)
});

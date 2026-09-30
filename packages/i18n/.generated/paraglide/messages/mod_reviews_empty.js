/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_EmptyInputs */

const en_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reviews yet. Downloaded it? Be the first to tell others how it went.`)
};

const es_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay reseñas. ¿Lo descargaste? Sé el primero en contar qué tal.`)
};

const de_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Bewertungen. Heruntergeladen? Erzähl als Erste:r, wie es lief.`)
};

const fr_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore d’avis. Vous l’avez téléchargé ? Soyez le premier à raconter.`)
};

const it_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna recensione. L’hai scaricata? Racconta per primo com’è andata.`)
};

const nl_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reviews. Gedownload? Vertel als eerste hoe het ging.`)
};

const pl_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak recenzji. Pobrałeś? Opowiedz jako pierwszy, jak poszło.`)
};

const pt_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há avaliações. Baixou? Seja o primeiro a contar como foi.`)
};

const ru_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывов пока нет. Скачали? Расскажите первым, как всё прошло.`)
};

const sv_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga recensioner än. Laddat ner den? Berätta först hur det gick.`)
};

const tr_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz inceleme yok. İndirdin mi? Nasıl gittiğini ilk sen anlat.`)
};

const zh_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评价。下载过了吗？来当第一个分享体验的人。`)
};

const ja_mod_reviews_empty = /** @type {(inputs: Mod_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだレビューはありません。ダウンロードした？最初に感想を書いてみよう。`)
};

/**
* | output |
* | --- |
* | "No reviews yet. Downloaded it? Be the first to tell others how it went." |
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

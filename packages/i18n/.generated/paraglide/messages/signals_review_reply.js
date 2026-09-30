/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Review_ReplyInputs */

const en_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The author of ${i?.mod} replied to your review`)
};

const es_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El autor de ${i?.mod} ha respondido a tu reseña`)
};

const de_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Autor von ${i?.mod} hat auf deine Bewertung geantwortet`)
};

const fr_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’auteur de ${i?.mod} a répondu à votre avis`)
};

const it_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’autore di ${i?.mod} ha risposto alla tua recensione`)
};

const nl_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De maker van ${i?.mod} heeft op je review gereageerd`)
};

const pl_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor ${i?.mod} odpowiedział na twoją recenzję`)
};

const pt_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O autor de ${i?.mod} respondeu à sua avaliação`)
};

const ru_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор ${i?.mod} ответил на ваш отзыв`)
};

const sv_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skaparen av ${i?.mod} svarade på din recension`)
};

const tr_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} yapımcısı incelemeni yanıtladı`)
};

const zh_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 的作者回复了你的评价`)
};

const ja_signals_review_reply = /** @type {(inputs: Signals_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} の作者があなたのレビューに返信しました`)
};

/**
* | output |
* | --- |
* | "The author of {mod} replied to your review" |
*
* @param {Signals_Review_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_review_reply = /** @type {((inputs: Signals_Review_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Review_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_review_reply(inputs)
	if (locale === "de") return de_signals_review_reply(inputs)
	if (locale === "fr") return fr_signals_review_reply(inputs)
	if (locale === "it") return it_signals_review_reply(inputs)
	if (locale === "nl") return nl_signals_review_reply(inputs)
	if (locale === "pl") return pl_signals_review_reply(inputs)
	if (locale === "pt") return pt_signals_review_reply(inputs)
	if (locale === "ru") return ru_signals_review_reply(inputs)
	if (locale === "sv") return sv_signals_review_reply(inputs)
	if (locale === "tr") return tr_signals_review_reply(inputs)
	if (locale === "zh") return zh_signals_review_reply(inputs)
	if (locale === "ja") return ja_signals_review_reply(inputs)
	return en_signals_review_reply(inputs)
});

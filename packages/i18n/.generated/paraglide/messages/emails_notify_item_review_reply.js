/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Emails_Notify_Item_Review_ReplyInputs */

const en_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The author of ${i?.mod} replied to your review`)
};

const es_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El autor de ${i?.mod} respondió a tu reseña`)
};

const de_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Autor von ${i?.mod} hat auf deine Bewertung geantwortet`)
};

const fr_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’auteur de ${i?.mod} a répondu à votre avis`)
};

const it_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’autore di ${i?.mod} ha risposto alla tua recensione`)
};

const nl_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De maker van ${i?.mod} heeft op je beoordeling gereageerd`)
};

const pl_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor ${i?.mod} odpowiedział na Twoją recenzję`)
};

const pt_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O autor de ${i?.mod} respondeu à sua avaliação`)
};

const ru_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор ${i?.mod} ответил на ваш отзыв`)
};

const sv_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skaparen av ${i?.mod} svarade på din recension`)
};

const tr_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} yapımcısı incelemene yanıt verdi`)
};

const zh_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 的作者回复了你的评价`)
};

const ja_emails_notify_item_review_reply = /** @type {(inputs: Emails_Notify_Item_Review_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} の作者があなたのレビューに返信しました`)
};

/**
* | output |
* | --- |
* | "The author of {mod} replied to your review" |
*
* @param {Emails_Notify_Item_Review_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_review_reply = /** @type {((inputs: Emails_Notify_Item_Review_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Review_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_review_reply(inputs)
	if (locale === "de") return de_emails_notify_item_review_reply(inputs)
	if (locale === "fr") return fr_emails_notify_item_review_reply(inputs)
	if (locale === "it") return it_emails_notify_item_review_reply(inputs)
	if (locale === "nl") return nl_emails_notify_item_review_reply(inputs)
	if (locale === "pl") return pl_emails_notify_item_review_reply(inputs)
	if (locale === "pt") return pt_emails_notify_item_review_reply(inputs)
	if (locale === "ru") return ru_emails_notify_item_review_reply(inputs)
	if (locale === "sv") return sv_emails_notify_item_review_reply(inputs)
	if (locale === "tr") return tr_emails_notify_item_review_reply(inputs)
	if (locale === "zh") return zh_emails_notify_item_review_reply(inputs)
	if (locale === "ja") return ja_emails_notify_item_review_reply(inputs)
	return en_emails_notify_item_review_reply(inputs)
});

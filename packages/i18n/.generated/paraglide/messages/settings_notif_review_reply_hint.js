/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Review_Reply_HintInputs */

const en_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An author answered your review.`)
};

const es_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un autor ha respondido a tu reseña.`)
};

const de_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Autor hat auf deine Bewertung geantwortet.`)
};

const fr_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un auteur a répondu à votre avis.`)
};

const it_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un autore ha risposto alla tua recensione.`)
};

const nl_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een maker heeft op je review gereageerd.`)
};

const pl_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor odpowiedział na twoją recenzję.`)
};

const pt_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um autor respondeu à sua avaliação.`)
};

const ru_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор ответил на ваш отзыв.`)
};

const sv_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En skapare har svarat på din recension.`)
};

const tr_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir yapımcı incelemeni yanıtladı.`)
};

const zh_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者回复了你的评价。`)
};

const ja_settings_notif_review_reply_hint = /** @type {(inputs: Settings_Notif_Review_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者があなたのレビューに返信しました。`)
};

/**
* | output |
* | --- |
* | "An author answered your review." |
*
* @param {Settings_Notif_Review_Reply_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_review_reply_hint = /** @type {((inputs?: Settings_Notif_Review_Reply_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Review_Reply_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_review_reply_hint(inputs)
	if (locale === "de") return de_settings_notif_review_reply_hint(inputs)
	if (locale === "fr") return fr_settings_notif_review_reply_hint(inputs)
	if (locale === "it") return it_settings_notif_review_reply_hint(inputs)
	if (locale === "nl") return nl_settings_notif_review_reply_hint(inputs)
	if (locale === "pl") return pl_settings_notif_review_reply_hint(inputs)
	if (locale === "pt") return pt_settings_notif_review_reply_hint(inputs)
	if (locale === "ru") return ru_settings_notif_review_reply_hint(inputs)
	if (locale === "sv") return sv_settings_notif_review_reply_hint(inputs)
	if (locale === "tr") return tr_settings_notif_review_reply_hint(inputs)
	if (locale === "zh") return zh_settings_notif_review_reply_hint(inputs)
	if (locale === "ja") return ja_settings_notif_review_reply_hint(inputs)
	return en_settings_notif_review_reply_hint(inputs)
});

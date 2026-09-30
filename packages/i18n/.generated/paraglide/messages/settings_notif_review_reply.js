/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Review_ReplyInputs */

const en_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replies to your reviews`)
};

const es_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuestas a tus reseñas`)
};

const de_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antworten auf deine Bewertungen`)
};

const fr_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponses à vos avis`)
};

const it_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposte alle tue recensioni`)
};

const nl_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoorden op je reviews`)
};

const pl_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedzi na twoje recenzje`)
};

const pt_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respostas às suas avaliações`)
};

const ru_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответы на ваши отзывы`)
};

const sv_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svar på dina recensioner`)
};

const tr_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemelerine yanıtlar`)
};

const zh_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对你评价的回复`)
};

const ja_settings_notif_review_reply = /** @type {(inputs: Settings_Notif_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューへの返信`)
};

/**
* | output |
* | --- |
* | "Replies to your reviews" |
*
* @param {Settings_Notif_Review_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_review_reply = /** @type {((inputs?: Settings_Notif_Review_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Review_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_review_reply(inputs)
	if (locale === "de") return de_settings_notif_review_reply(inputs)
	if (locale === "fr") return fr_settings_notif_review_reply(inputs)
	if (locale === "it") return it_settings_notif_review_reply(inputs)
	if (locale === "nl") return nl_settings_notif_review_reply(inputs)
	if (locale === "pl") return pl_settings_notif_review_reply(inputs)
	if (locale === "pt") return pt_settings_notif_review_reply(inputs)
	if (locale === "ru") return ru_settings_notif_review_reply(inputs)
	if (locale === "sv") return sv_settings_notif_review_reply(inputs)
	if (locale === "tr") return tr_settings_notif_review_reply(inputs)
	if (locale === "zh") return zh_settings_notif_review_reply(inputs)
	if (locale === "ja") return ja_settings_notif_review_reply(inputs)
	return en_settings_notif_review_reply(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Reply_DeletedInputs */

const en_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply deleted.`)
};

const es_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuesta eliminada.`)
};

const de_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort gelöscht.`)
};

const fr_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponse supprimée.`)
};

const it_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposta eliminata.`)
};

const nl_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord verwijderd.`)
};

const pl_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedź usunięta.`)
};

const pt_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resposta excluída.`)
};

const ru_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответ удалён.`)
};

const sv_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svaret är raderat.`)
};

const tr_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıt silindi.`)
};

const zh_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复已删除。`)
};

const ja_social_review_reply_deleted = /** @type {(inputs: Social_Review_Reply_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を削除しました。`)
};

/**
* | output |
* | --- |
* | "Reply deleted." |
*
* @param {Social_Review_Reply_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_reply_deleted = /** @type {((inputs?: Social_Review_Reply_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Reply_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_reply_deleted(inputs)
	if (locale === "de") return de_social_review_reply_deleted(inputs)
	if (locale === "fr") return fr_social_review_reply_deleted(inputs)
	if (locale === "it") return it_social_review_reply_deleted(inputs)
	if (locale === "nl") return nl_social_review_reply_deleted(inputs)
	if (locale === "pl") return pl_social_review_reply_deleted(inputs)
	if (locale === "pt") return pt_social_review_reply_deleted(inputs)
	if (locale === "ru") return ru_social_review_reply_deleted(inputs)
	if (locale === "sv") return sv_social_review_reply_deleted(inputs)
	if (locale === "tr") return tr_social_review_reply_deleted(inputs)
	if (locale === "zh") return zh_social_review_reply_deleted(inputs)
	if (locale === "ja") return ja_social_review_reply_deleted(inputs)
	return en_social_review_reply_deleted(inputs)
});

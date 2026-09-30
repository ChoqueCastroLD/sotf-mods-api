/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Reply_DeleteInputs */

const en_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete your reply`)
};

const es_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar tu respuesta`)
};

const de_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort löschen`)
};

const fr_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer votre réponse`)
};

const it_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina la tua risposta`)
};

const nl_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je antwoord verwijderen`)
};

const pl_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń odpowiedź`)
};

const pt_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir sua resposta`)
};

const ru_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить ответ`)
};

const sv_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera ditt svar`)
};

const tr_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtını sil`)
};

const zh_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除你的回复`)
};

const ja_social_review_reply_delete = /** @type {(inputs: Social_Review_Reply_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を削除`)
};

/**
* | output |
* | --- |
* | "Delete your reply" |
*
* @param {Social_Review_Reply_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_reply_delete = /** @type {((inputs?: Social_Review_Reply_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Reply_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_reply_delete(inputs)
	if (locale === "de") return de_social_review_reply_delete(inputs)
	if (locale === "fr") return fr_social_review_reply_delete(inputs)
	if (locale === "it") return it_social_review_reply_delete(inputs)
	if (locale === "nl") return nl_social_review_reply_delete(inputs)
	if (locale === "pl") return pl_social_review_reply_delete(inputs)
	if (locale === "pt") return pt_social_review_reply_delete(inputs)
	if (locale === "ru") return ru_social_review_reply_delete(inputs)
	if (locale === "sv") return sv_social_review_reply_delete(inputs)
	if (locale === "tr") return tr_social_review_reply_delete(inputs)
	if (locale === "zh") return zh_social_review_reply_delete(inputs)
	if (locale === "ja") return ja_social_review_reply_delete(inputs)
	return en_social_review_reply_delete(inputs)
});

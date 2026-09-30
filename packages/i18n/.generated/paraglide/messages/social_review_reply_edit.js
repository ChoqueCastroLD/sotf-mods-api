/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Reply_EditInputs */

const en_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit your reply`)
};

const es_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar tu respuesta`)
};

const de_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort bearbeiten`)
};

const fr_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier votre réponse`)
};

const it_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica la tua risposta`)
};

const nl_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je antwoord bewerken`)
};

const pl_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj odpowiedź`)
};

const pt_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar sua resposta`)
};

const ru_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить ответ`)
};

const sv_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera ditt svar`)
};

const tr_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtını düzenle`)
};

const zh_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑你的回复`)
};

const ja_social_review_reply_edit = /** @type {(inputs: Social_Review_Reply_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を編集`)
};

/**
* | output |
* | --- |
* | "Edit your reply" |
*
* @param {Social_Review_Reply_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_reply_edit = /** @type {((inputs?: Social_Review_Reply_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Reply_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_reply_edit(inputs)
	if (locale === "de") return de_social_review_reply_edit(inputs)
	if (locale === "fr") return fr_social_review_reply_edit(inputs)
	if (locale === "it") return it_social_review_reply_edit(inputs)
	if (locale === "nl") return nl_social_review_reply_edit(inputs)
	if (locale === "pl") return pl_social_review_reply_edit(inputs)
	if (locale === "pt") return pt_social_review_reply_edit(inputs)
	if (locale === "ru") return ru_social_review_reply_edit(inputs)
	if (locale === "sv") return sv_social_review_reply_edit(inputs)
	if (locale === "tr") return tr_social_review_reply_edit(inputs)
	if (locale === "zh") return zh_social_review_reply_edit(inputs)
	if (locale === "ja") return ja_social_review_reply_edit(inputs)
	return en_social_review_reply_edit(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Reply_SubmitInputs */

const en_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish reply`)
};

const es_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar respuesta`)
};

const de_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort veröffentlichen`)
};

const fr_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier la réponse`)
};

const it_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica risposta`)
};

const nl_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord publiceren`)
};

const pl_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj odpowiedź`)
};

const pt_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar resposta`)
};

const ru_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать ответ`)
};

const sv_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera svar`)
};

const tr_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtı yayınla`)
};

const zh_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布回复`)
};

const ja_social_review_reply_submit = /** @type {(inputs: Social_Review_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を公開`)
};

/**
* | output |
* | --- |
* | "Publish reply" |
*
* @param {Social_Review_Reply_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_reply_submit = /** @type {((inputs?: Social_Review_Reply_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Reply_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_reply_submit(inputs)
	if (locale === "de") return de_social_review_reply_submit(inputs)
	if (locale === "fr") return fr_social_review_reply_submit(inputs)
	if (locale === "it") return it_social_review_reply_submit(inputs)
	if (locale === "nl") return nl_social_review_reply_submit(inputs)
	if (locale === "pl") return pl_social_review_reply_submit(inputs)
	if (locale === "pt") return pt_social_review_reply_submit(inputs)
	if (locale === "ru") return ru_social_review_reply_submit(inputs)
	if (locale === "sv") return sv_social_review_reply_submit(inputs)
	if (locale === "tr") return tr_social_review_reply_submit(inputs)
	if (locale === "zh") return zh_social_review_reply_submit(inputs)
	if (locale === "ja") return ja_social_review_reply_submit(inputs)
	return en_social_review_reply_submit(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_Reply_LabelInputs */

const en_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your reply`)
};

const es_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu respuesta`)
};

const de_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Antwort`)
};

const fr_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre réponse`)
};

const it_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua risposta`)
};

const nl_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je antwoord`)
};

const pl_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja odpowiedź`)
};

const pt_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua resposta`)
};

const ru_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш ответ`)
};

const sv_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt svar`)
};

const tr_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtın`)
};

const zh_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的回复`)
};

const ja_social_comment_reply_label = /** @type {(inputs: Social_Comment_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの返信`)
};

/**
* | output |
* | --- |
* | "Your reply" |
*
* @param {Social_Comment_Reply_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_reply_label = /** @type {((inputs?: Social_Comment_Reply_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Reply_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_reply_label(inputs)
	if (locale === "de") return de_social_comment_reply_label(inputs)
	if (locale === "fr") return fr_social_comment_reply_label(inputs)
	if (locale === "it") return it_social_comment_reply_label(inputs)
	if (locale === "nl") return nl_social_comment_reply_label(inputs)
	if (locale === "pl") return pl_social_comment_reply_label(inputs)
	if (locale === "pt") return pt_social_comment_reply_label(inputs)
	if (locale === "ru") return ru_social_comment_reply_label(inputs)
	if (locale === "sv") return sv_social_comment_reply_label(inputs)
	if (locale === "tr") return tr_social_comment_reply_label(inputs)
	if (locale === "zh") return zh_social_comment_reply_label(inputs)
	if (locale === "ja") return ja_social_comment_reply_label(inputs)
	return en_social_comment_reply_label(inputs)
});

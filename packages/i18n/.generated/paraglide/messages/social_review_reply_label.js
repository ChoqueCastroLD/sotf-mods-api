/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Reply_LabelInputs */

const en_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your public reply`)
};

const es_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu respuesta pública`)
};

const de_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine öffentliche Antwort`)
};

const fr_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre réponse publique`)
};

const it_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua risposta pubblica`)
};

const nl_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je openbare antwoord`)
};

const pl_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja publiczna odpowiedź`)
};

const pt_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua resposta pública`)
};

const ru_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш публичный ответ`)
};

const sv_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt offentliga svar`)
};

const tr_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık yanıtın`)
};

const zh_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的公开回复`)
};

const ja_social_review_reply_label = /** @type {(inputs: Social_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの公開返信`)
};

/**
* | output |
* | --- |
* | "Your public reply" |
*
* @param {Social_Review_Reply_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_reply_label = /** @type {((inputs?: Social_Review_Reply_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Reply_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_reply_label(inputs)
	if (locale === "de") return de_social_review_reply_label(inputs)
	if (locale === "fr") return fr_social_review_reply_label(inputs)
	if (locale === "it") return it_social_review_reply_label(inputs)
	if (locale === "nl") return nl_social_review_reply_label(inputs)
	if (locale === "pl") return pl_social_review_reply_label(inputs)
	if (locale === "pt") return pt_social_review_reply_label(inputs)
	if (locale === "ru") return ru_social_review_reply_label(inputs)
	if (locale === "sv") return sv_social_review_reply_label(inputs)
	if (locale === "tr") return tr_social_review_reply_label(inputs)
	if (locale === "zh") return zh_social_review_reply_label(inputs)
	if (locale === "ja") return ja_social_review_reply_label(inputs)
	return en_social_review_reply_label(inputs)
});

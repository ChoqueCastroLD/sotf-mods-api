/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Reply_SavedInputs */

const en_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply published.`)
};

const es_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuesta publicada.`)
};

const de_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort veröffentlicht.`)
};

const fr_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponse publiée.`)
};

const it_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposta pubblicata.`)
};

const nl_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord gepubliceerd.`)
};

const pl_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedź opublikowana.`)
};

const pt_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resposta publicada.`)
};

const ru_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответ опубликован.`)
};

const sv_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svaret är publicerat.`)
};

const tr_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıt yayınlandı.`)
};

const zh_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复已发布。`)
};

const ja_social_review_reply_saved = /** @type {(inputs: Social_Review_Reply_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を公開しました。`)
};

/**
* | output |
* | --- |
* | "Reply published." |
*
* @param {Social_Review_Reply_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_reply_saved = /** @type {((inputs?: Social_Review_Reply_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Reply_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_reply_saved(inputs)
	if (locale === "de") return de_social_review_reply_saved(inputs)
	if (locale === "fr") return fr_social_review_reply_saved(inputs)
	if (locale === "it") return it_social_review_reply_saved(inputs)
	if (locale === "nl") return nl_social_review_reply_saved(inputs)
	if (locale === "pl") return pl_social_review_reply_saved(inputs)
	if (locale === "pt") return pt_social_review_reply_saved(inputs)
	if (locale === "ru") return ru_social_review_reply_saved(inputs)
	if (locale === "sv") return sv_social_review_reply_saved(inputs)
	if (locale === "tr") return tr_social_review_reply_saved(inputs)
	if (locale === "zh") return zh_social_review_reply_saved(inputs)
	if (locale === "ja") return ja_social_review_reply_saved(inputs)
	return en_social_review_reply_saved(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_ReplyInputs */

const en_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply publicly`)
};

const es_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder públicamente`)
};

const de_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffentlich antworten`)
};

const fr_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondre publiquement`)
};

const it_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rispondi pubblicamente`)
};

const nl_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openbaar reageren`)
};

const pl_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedz publicznie`)
};

const pt_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder publicamente`)
};

const ru_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответить публично`)
};

const sv_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svara offentligt`)
};

const tr_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık yanıtla`)
};

const zh_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开回复`)
};

const ja_social_review_reply = /** @type {(inputs: Social_Review_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開で返信`)
};

/**
* | output |
* | --- |
* | "Reply publicly" |
*
* @param {Social_Review_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_reply = /** @type {((inputs?: Social_Review_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_reply(inputs)
	if (locale === "de") return de_social_review_reply(inputs)
	if (locale === "fr") return fr_social_review_reply(inputs)
	if (locale === "it") return it_social_review_reply(inputs)
	if (locale === "nl") return nl_social_review_reply(inputs)
	if (locale === "pl") return pl_social_review_reply(inputs)
	if (locale === "pt") return pt_social_review_reply(inputs)
	if (locale === "ru") return ru_social_review_reply(inputs)
	if (locale === "sv") return sv_social_review_reply(inputs)
	if (locale === "tr") return tr_social_review_reply(inputs)
	if (locale === "zh") return zh_social_review_reply(inputs)
	if (locale === "ja") return ja_social_review_reply(inputs)
	return en_social_review_reply(inputs)
});

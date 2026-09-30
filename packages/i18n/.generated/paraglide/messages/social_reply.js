/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_ReplyInputs */

const en_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply`)
};

const es_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder`)
};

const de_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antworten`)
};

const fr_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondre`)
};

const it_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rispondi`)
};

const nl_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beantwoorden`)
};

const pl_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedz`)
};

const pt_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder`)
};

const ru_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответить`)
};

const sv_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svara`)
};

const tr_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtla`)
};

const zh_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复`)
};

const ja_social_reply = /** @type {(inputs: Social_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信`)
};

/**
* | output |
* | --- |
* | "Reply" |
*
* @param {Social_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reply = /** @type {((inputs?: Social_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reply(inputs)
	if (locale === "de") return de_social_reply(inputs)
	if (locale === "fr") return fr_social_reply(inputs)
	if (locale === "it") return it_social_reply(inputs)
	if (locale === "nl") return nl_social_reply(inputs)
	if (locale === "pl") return pl_social_reply(inputs)
	if (locale === "pt") return pt_social_reply(inputs)
	if (locale === "ru") return ru_social_reply(inputs)
	if (locale === "sv") return sv_social_reply(inputs)
	if (locale === "tr") return tr_social_reply(inputs)
	if (locale === "zh") return zh_social_reply(inputs)
	if (locale === "ja") return ja_social_reply(inputs)
	return en_social_reply(inputs)
});

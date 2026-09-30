/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_ReplyInputs */

const en_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply`)
};

const es_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder`)
};

const de_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antworten`)
};

const fr_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondre`)
};

const it_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rispondi`)
};

const nl_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beantwoorden`)
};

const pl_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedz`)
};

const pt_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder`)
};

const ru_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответить`)
};

const sv_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svara`)
};

const tr_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtla`)
};

const zh_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复`)
};

const ja_kitsocial_reply = /** @type {(inputs: Kitsocial_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信`)
};

/**
* | output |
* | --- |
* | "Reply" |
*
* @param {Kitsocial_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_reply = /** @type {((inputs?: Kitsocial_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_reply(inputs)
	if (locale === "de") return de_kitsocial_reply(inputs)
	if (locale === "fr") return fr_kitsocial_reply(inputs)
	if (locale === "it") return it_kitsocial_reply(inputs)
	if (locale === "nl") return nl_kitsocial_reply(inputs)
	if (locale === "pl") return pl_kitsocial_reply(inputs)
	if (locale === "pt") return pt_kitsocial_reply(inputs)
	if (locale === "ru") return ru_kitsocial_reply(inputs)
	if (locale === "sv") return sv_kitsocial_reply(inputs)
	if (locale === "tr") return tr_kitsocial_reply(inputs)
	if (locale === "zh") return zh_kitsocial_reply(inputs)
	if (locale === "ja") return ja_kitsocial_reply(inputs)
	return en_kitsocial_reply(inputs)
});

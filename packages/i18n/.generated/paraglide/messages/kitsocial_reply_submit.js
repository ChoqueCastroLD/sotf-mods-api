/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Reply_SubmitInputs */

const en_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post reply`)
};

const es_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar respuesta`)
};

const de_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort senden`)
};

const fr_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier la réponse`)
};

const it_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica risposta`)
};

const nl_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord plaatsen`)
};

const pl_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj odpowiedź`)
};

const pt_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar resposta`)
};

const ru_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить ответ`)
};

const sv_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera svar`)
};

const tr_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtı gönder`)
};

const zh_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布回复`)
};

const ja_kitsocial_reply_submit = /** @type {(inputs: Kitsocial_Reply_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を投稿`)
};

/**
* | output |
* | --- |
* | "Post reply" |
*
* @param {Kitsocial_Reply_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_reply_submit = /** @type {((inputs?: Kitsocial_Reply_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Reply_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_reply_submit(inputs)
	if (locale === "de") return de_kitsocial_reply_submit(inputs)
	if (locale === "fr") return fr_kitsocial_reply_submit(inputs)
	if (locale === "it") return it_kitsocial_reply_submit(inputs)
	if (locale === "nl") return nl_kitsocial_reply_submit(inputs)
	if (locale === "pl") return pl_kitsocial_reply_submit(inputs)
	if (locale === "pt") return pt_kitsocial_reply_submit(inputs)
	if (locale === "ru") return ru_kitsocial_reply_submit(inputs)
	if (locale === "sv") return sv_kitsocial_reply_submit(inputs)
	if (locale === "tr") return tr_kitsocial_reply_submit(inputs)
	if (locale === "zh") return zh_kitsocial_reply_submit(inputs)
	if (locale === "ja") return ja_kitsocial_reply_submit(inputs)
	return en_kitsocial_reply_submit(inputs)
});

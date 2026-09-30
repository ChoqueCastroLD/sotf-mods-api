/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Reply_FailedInputs */

const en_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The reply could not be posted`)
};

const es_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo publicar la respuesta`)
};

const de_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Antwort konnte nicht veröffentlicht werden`)
};

const fr_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La réponse n’a pas pu être publiée`)
};

const it_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile pubblicare la risposta`)
};

const nl_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het antwoord kon niet worden geplaatst`)
};

const pl_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się opublikować odpowiedzi`)
};

const pt_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível publicar a resposta`)
};

const ru_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось опубликовать ответ`)
};

const sv_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svaret kunde inte publiceras`)
};

const tr_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıt yayınlanamadı`)
};

const zh_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法发布回复`)
};

const ja_basecamp_inbox_reply_failed = /** @type {(inputs: Basecamp_Inbox_Reply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を投稿できませんでした`)
};

/**
* | output |
* | --- |
* | "The reply could not be posted" |
*
* @param {Basecamp_Inbox_Reply_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_reply_failed = /** @type {((inputs?: Basecamp_Inbox_Reply_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Reply_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_reply_failed(inputs)
	if (locale === "de") return de_basecamp_inbox_reply_failed(inputs)
	if (locale === "fr") return fr_basecamp_inbox_reply_failed(inputs)
	if (locale === "it") return it_basecamp_inbox_reply_failed(inputs)
	if (locale === "nl") return nl_basecamp_inbox_reply_failed(inputs)
	if (locale === "pl") return pl_basecamp_inbox_reply_failed(inputs)
	if (locale === "pt") return pt_basecamp_inbox_reply_failed(inputs)
	if (locale === "ru") return ru_basecamp_inbox_reply_failed(inputs)
	if (locale === "sv") return sv_basecamp_inbox_reply_failed(inputs)
	if (locale === "tr") return tr_basecamp_inbox_reply_failed(inputs)
	if (locale === "zh") return zh_basecamp_inbox_reply_failed(inputs)
	if (locale === "ja") return ja_basecamp_inbox_reply_failed(inputs)
	return en_basecamp_inbox_reply_failed(inputs)
});

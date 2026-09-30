/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, request: NonNullable<unknown> }} Signals_Request_CommentInputs */

const en_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} commented on the request “${i?.request}”`)
};

const es_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} comentó la petición «${i?.request}»`)
};

const de_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat die Anfrage „${i?.request}“ kommentiert`)
};

const fr_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a commenté la demande « ${i?.request} »`)
};

const it_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha commentato la richiesta «${i?.request}»`)
};

const nl_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} heeft gereageerd op het verzoek “${i?.request}”`)
};

const pl_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} skomentował(a) prośbę „${i?.request}”`)
};

const pt_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} comentou o pedido “${i?.request}”`)
};

const ru_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} прокомментировал(а) запрос «${i?.request}»`)
};

const sv_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} kommenterade förfrågan ”${i?.request}”`)
};

const tr_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, “${i?.request}” isteğine yorum yaptı`)
};

const zh_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 评论了请求“${i?.request}”`)
};

const ja_signals_request_comment = /** @type {(inputs: Signals_Request_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} がリクエスト「${i?.request}」にコメントしました`)
};

/**
* | output |
* | --- |
* | "{actor} commented on the request “{request}”" |
*
* @param {Signals_Request_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_request_comment = /** @type {((inputs: Signals_Request_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Request_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_request_comment(inputs)
	if (locale === "de") return de_signals_request_comment(inputs)
	if (locale === "fr") return fr_signals_request_comment(inputs)
	if (locale === "it") return it_signals_request_comment(inputs)
	if (locale === "nl") return nl_signals_request_comment(inputs)
	if (locale === "pl") return pl_signals_request_comment(inputs)
	if (locale === "pt") return pt_signals_request_comment(inputs)
	if (locale === "ru") return ru_signals_request_comment(inputs)
	if (locale === "sv") return sv_signals_request_comment(inputs)
	if (locale === "tr") return tr_signals_request_comment(inputs)
	if (locale === "zh") return zh_signals_request_comment(inputs)
	if (locale === "ja") return ja_signals_request_comment(inputs)
	return en_signals_request_comment(inputs)
});

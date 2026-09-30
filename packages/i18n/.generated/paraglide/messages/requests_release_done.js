/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Release_DoneInputs */

const en_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The request is open again.`)
};

const es_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La petición vuelve a estar abierta.`)
};

const de_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Wunsch ist wieder offen.`)
};

const fr_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La demande est de nouveau ouverte.`)
};

const it_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La richiesta è di nuovo aperta.`)
};

const nl_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het verzoek is weer open.`)
};

const pl_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba jest znowu otwarta.`)
};

const pt_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O pedido está aberto de novo.`)
};

const ru_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос снова открыт.`)
};

const sv_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålet är öppet igen.`)
};

const tr_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek yeniden açık.`)
};

const zh_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已重新开放。`)
};

const ja_requests_release_done = /** @type {(inputs: Requests_Release_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストが再び受付中になりました。`)
};

/**
* | output |
* | --- |
* | "The request is open again." |
*
* @param {Requests_Release_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_release_done = /** @type {((inputs?: Requests_Release_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Release_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_release_done(inputs)
	if (locale === "de") return de_requests_release_done(inputs)
	if (locale === "fr") return fr_requests_release_done(inputs)
	if (locale === "it") return it_requests_release_done(inputs)
	if (locale === "nl") return nl_requests_release_done(inputs)
	if (locale === "pl") return pl_requests_release_done(inputs)
	if (locale === "pt") return pt_requests_release_done(inputs)
	if (locale === "ru") return ru_requests_release_done(inputs)
	if (locale === "sv") return sv_requests_release_done(inputs)
	if (locale === "tr") return tr_requests_release_done(inputs)
	if (locale === "zh") return zh_requests_release_done(inputs)
	if (locale === "ja") return ja_requests_release_done(inputs)
	return en_requests_release_done(inputs)
});

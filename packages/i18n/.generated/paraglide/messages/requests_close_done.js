/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Close_DoneInputs */

const en_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request closed.`)
};

const es_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición cerrada.`)
};

const de_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch geschlossen.`)
};

const fr_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande fermée.`)
};

const it_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta chiusa.`)
};

const nl_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek gesloten.`)
};

const pl_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba zamknięta.`)
};

const pt_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido fechado.`)
};

const ru_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос закрыт.`)
};

const sv_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålet är stängt.`)
};

const tr_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek kapatıldı.`)
};

const zh_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已关闭。`)
};

const ja_requests_close_done = /** @type {(inputs: Requests_Close_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを終了しました。`)
};

/**
* | output |
* | --- |
* | "Request closed." |
*
* @param {Requests_Close_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_close_done = /** @type {((inputs?: Requests_Close_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Close_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_close_done(inputs)
	if (locale === "de") return de_requests_close_done(inputs)
	if (locale === "fr") return fr_requests_close_done(inputs)
	if (locale === "it") return it_requests_close_done(inputs)
	if (locale === "nl") return nl_requests_close_done(inputs)
	if (locale === "pl") return pl_requests_close_done(inputs)
	if (locale === "pt") return pt_requests_close_done(inputs)
	if (locale === "ru") return ru_requests_close_done(inputs)
	if (locale === "sv") return sv_requests_close_done(inputs)
	if (locale === "tr") return tr_requests_close_done(inputs)
	if (locale === "zh") return zh_requests_close_done(inputs)
	if (locale === "ja") return ja_requests_close_done(inputs)
	return en_requests_close_done(inputs)
});

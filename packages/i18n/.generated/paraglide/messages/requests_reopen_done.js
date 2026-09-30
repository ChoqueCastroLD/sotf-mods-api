/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Reopen_DoneInputs */

const en_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request reopened.`)
};

const es_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición reabierta.`)
};

const de_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch wieder geöffnet.`)
};

const fr_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande rouverte.`)
};

const it_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta riaperta.`)
};

const nl_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek heropend.`)
};

const pl_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba otwarta ponownie.`)
};

const pt_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido reaberto.`)
};

const ru_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос снова открыт.`)
};

const sv_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålet är öppnat igen.`)
};

const tr_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek yeniden açıldı.`)
};

const zh_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求已重新开放。`)
};

const ja_requests_reopen_done = /** @type {(inputs: Requests_Reopen_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを再開しました。`)
};

/**
* | output |
* | --- |
* | "Request reopened." |
*
* @param {Requests_Reopen_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_reopen_done = /** @type {((inputs?: Requests_Reopen_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Reopen_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_reopen_done(inputs)
	if (locale === "de") return de_requests_reopen_done(inputs)
	if (locale === "fr") return fr_requests_reopen_done(inputs)
	if (locale === "it") return it_requests_reopen_done(inputs)
	if (locale === "nl") return nl_requests_reopen_done(inputs)
	if (locale === "pl") return pl_requests_reopen_done(inputs)
	if (locale === "pt") return pt_requests_reopen_done(inputs)
	if (locale === "ru") return ru_requests_reopen_done(inputs)
	if (locale === "sv") return sv_requests_reopen_done(inputs)
	if (locale === "tr") return tr_requests_reopen_done(inputs)
	if (locale === "zh") return zh_requests_reopen_done(inputs)
	if (locale === "ja") return ja_requests_reopen_done(inputs)
	return en_requests_reopen_done(inputs)
});

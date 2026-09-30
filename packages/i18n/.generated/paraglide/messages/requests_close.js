/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_CloseInputs */

const en_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close request`)
};

const es_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar petición`)
};

const de_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch schließen`)
};

const fr_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer la demande`)
};

const it_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi la richiesta`)
};

const nl_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek sluiten`)
};

const pl_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij prośbę`)
};

const pt_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar pedido`)
};

const ru_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть запрос`)
};

const sv_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng önskemålet`)
};

const tr_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İsteği kapat`)
};

const zh_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭请求`)
};

const ja_requests_close = /** @type {(inputs: Requests_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを終了`)
};

/**
* | output |
* | --- |
* | "Close request" |
*
* @param {Requests_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_close = /** @type {((inputs?: Requests_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_close(inputs)
	if (locale === "de") return de_requests_close(inputs)
	if (locale === "fr") return fr_requests_close(inputs)
	if (locale === "it") return it_requests_close(inputs)
	if (locale === "nl") return nl_requests_close(inputs)
	if (locale === "pl") return pl_requests_close(inputs)
	if (locale === "pt") return pt_requests_close(inputs)
	if (locale === "ru") return ru_requests_close(inputs)
	if (locale === "sv") return sv_requests_close(inputs)
	if (locale === "tr") return tr_requests_close(inputs)
	if (locale === "zh") return zh_requests_close(inputs)
	if (locale === "ja") return ja_requests_close(inputs)
	return en_requests_close(inputs)
});

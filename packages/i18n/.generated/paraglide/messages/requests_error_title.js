/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Error_TitleInputs */

const en_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The request board is not answering`)
};

const es_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El tablón de peticiones no responde`)
};

const de_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Wunschliste antwortet nicht`)
};

const fr_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tableau des demandes ne répond pas`)
};

const it_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La bacheca delle richieste non risponde`)
};

const nl_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het verzoekenbord reageert niet`)
};

const pl_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tablica próśb nie odpowiada`)
};

const pt_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O quadro de pedidos não responde`)
};

const ru_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доска запросов не отвечает`)
};

const sv_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskelistan svarar inte`)
};

const tr_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek panosu yanıt vermiyor`)
};

const zh_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求板没有响应`)
};

const ja_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストボードが応答しません`)
};

/**
* | output |
* | --- |
* | "The request board is not answering" |
*
* @param {Requests_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_error_title = /** @type {((inputs?: Requests_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_error_title(inputs)
	if (locale === "de") return de_requests_error_title(inputs)
	if (locale === "fr") return fr_requests_error_title(inputs)
	if (locale === "it") return it_requests_error_title(inputs)
	if (locale === "nl") return nl_requests_error_title(inputs)
	if (locale === "pl") return pl_requests_error_title(inputs)
	if (locale === "pt") return pt_requests_error_title(inputs)
	if (locale === "ru") return ru_requests_error_title(inputs)
	if (locale === "sv") return sv_requests_error_title(inputs)
	if (locale === "tr") return tr_requests_error_title(inputs)
	if (locale === "zh") return zh_requests_error_title(inputs)
	if (locale === "ja") return ja_requests_error_title(inputs)
	return en_requests_error_title(inputs)
});

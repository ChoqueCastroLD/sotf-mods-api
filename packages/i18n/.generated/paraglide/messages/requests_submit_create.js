/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Submit_CreateInputs */

const en_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post request`)
};

const es_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar petición`)
};

const de_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch einstellen`)
};

const fr_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier la demande`)
};

const it_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica la richiesta`)
};

const nl_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek plaatsen`)
};

const pl_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj prośbę`)
};

const pt_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar pedido`)
};

const ru_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать запрос`)
};

const sv_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg upp önskemålet`)
};

const tr_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İsteği yayımla`)
};

const zh_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布请求`)
};

const ja_requests_submit_create = /** @type {(inputs: Requests_Submit_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを投稿`)
};

/**
* | output |
* | --- |
* | "Post request" |
*
* @param {Requests_Submit_CreateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_submit_create = /** @type {((inputs?: Requests_Submit_CreateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Submit_CreateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_submit_create(inputs)
	if (locale === "de") return de_requests_submit_create(inputs)
	if (locale === "fr") return fr_requests_submit_create(inputs)
	if (locale === "it") return it_requests_submit_create(inputs)
	if (locale === "nl") return nl_requests_submit_create(inputs)
	if (locale === "pl") return pl_requests_submit_create(inputs)
	if (locale === "pt") return pt_requests_submit_create(inputs)
	if (locale === "ru") return ru_requests_submit_create(inputs)
	if (locale === "sv") return sv_requests_submit_create(inputs)
	if (locale === "tr") return tr_requests_submit_create(inputs)
	if (locale === "zh") return zh_requests_submit_create(inputs)
	if (locale === "ja") return ja_requests_submit_create(inputs)
	return en_requests_submit_create(inputs)
});

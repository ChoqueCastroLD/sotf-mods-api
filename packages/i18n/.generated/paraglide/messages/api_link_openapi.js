/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Link_OpenapiInputs */

const en_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const es_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const de_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const fr_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const it_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const nl_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const pl_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const pt_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const ru_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const sv_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const tr_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const zh_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

const ja_api_link_openapi = /** @type {(inputs: Api_Link_OpenapiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI`)
};

/**
* | output |
* | --- |
* | "OpenAPI" |
*
* @param {Api_Link_OpenapiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_link_openapi = /** @type {((inputs?: Api_Link_OpenapiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Link_OpenapiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_link_openapi(inputs)
	if (locale === "de") return de_api_link_openapi(inputs)
	if (locale === "fr") return fr_api_link_openapi(inputs)
	if (locale === "it") return it_api_link_openapi(inputs)
	if (locale === "nl") return nl_api_link_openapi(inputs)
	if (locale === "pl") return pl_api_link_openapi(inputs)
	if (locale === "pt") return pt_api_link_openapi(inputs)
	if (locale === "ru") return ru_api_link_openapi(inputs)
	if (locale === "sv") return sv_api_link_openapi(inputs)
	if (locale === "tr") return tr_api_link_openapi(inputs)
	if (locale === "zh") return zh_api_link_openapi(inputs)
	if (locale === "ja") return ja_api_link_openapi(inputs)
	return en_api_link_openapi(inputs)
});

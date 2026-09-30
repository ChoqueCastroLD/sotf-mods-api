/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Link_Openapi_TitleInputs */

const en_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const es_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const de_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const fr_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const it_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const nl_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const pl_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const pt_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const ru_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const sv_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const tr_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const zh_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

const ja_content_dev_link_openapi_title = /** @type {(inputs: Content_Dev_Link_Openapi_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAPI 3.1`)
};

/**
* | output |
* | --- |
* | "OpenAPI 3.1" |
*
* @param {Content_Dev_Link_Openapi_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_link_openapi_title = /** @type {((inputs?: Content_Dev_Link_Openapi_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Link_Openapi_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_link_openapi_title(inputs)
	if (locale === "de") return de_content_dev_link_openapi_title(inputs)
	if (locale === "fr") return fr_content_dev_link_openapi_title(inputs)
	if (locale === "it") return it_content_dev_link_openapi_title(inputs)
	if (locale === "nl") return nl_content_dev_link_openapi_title(inputs)
	if (locale === "pl") return pl_content_dev_link_openapi_title(inputs)
	if (locale === "pt") return pt_content_dev_link_openapi_title(inputs)
	if (locale === "ru") return ru_content_dev_link_openapi_title(inputs)
	if (locale === "sv") return sv_content_dev_link_openapi_title(inputs)
	if (locale === "tr") return tr_content_dev_link_openapi_title(inputs)
	if (locale === "zh") return zh_content_dev_link_openapi_title(inputs)
	if (locale === "ja") return ja_content_dev_link_openapi_title(inputs)
	return en_content_dev_link_openapi_title(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_Api_DocsInputs */

const en_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API docs`)
};

const es_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentación de la API`)
};

const de_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-Dokumentation`)
};

const fr_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentation de l’API`)
};

const it_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentazione API`)
};

const nl_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-documentatie`)
};

const pl_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dokumentacja API`)
};

const pt_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentação da API`)
};

const ru_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Документация API`)
};

const sv_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-dokumentation`)
};

const tr_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API belgeleri`)
};

const zh_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 文档`)
};

const ja_common_footer_api_docs = /** @type {(inputs: Common_Footer_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API ドキュメント`)
};

/**
* | output |
* | --- |
* | "API docs" |
*
* @param {Common_Footer_Api_DocsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_api_docs = /** @type {((inputs?: Common_Footer_Api_DocsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_Api_DocsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_api_docs(inputs)
	if (locale === "de") return de_common_footer_api_docs(inputs)
	if (locale === "fr") return fr_common_footer_api_docs(inputs)
	if (locale === "it") return it_common_footer_api_docs(inputs)
	if (locale === "nl") return nl_common_footer_api_docs(inputs)
	if (locale === "pl") return pl_common_footer_api_docs(inputs)
	if (locale === "pt") return pt_common_footer_api_docs(inputs)
	if (locale === "ru") return ru_common_footer_api_docs(inputs)
	if (locale === "sv") return sv_common_footer_api_docs(inputs)
	if (locale === "tr") return tr_common_footer_api_docs(inputs)
	if (locale === "zh") return zh_common_footer_api_docs(inputs)
	if (locale === "ja") return ja_common_footer_api_docs(inputs)
	return en_common_footer_api_docs(inputs)
});

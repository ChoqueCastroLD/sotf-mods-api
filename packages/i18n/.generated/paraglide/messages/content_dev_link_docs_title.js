/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Link_Docs_TitleInputs */

const en_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API reference`)
};

const es_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referencia de la API`)
};

const de_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-Referenz`)
};

const fr_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Référence de l’API`)
};

const it_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riferimento dell’API`)
};

const nl_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-referentie`)
};

const pl_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dokumentacja API`)
};

const pt_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referência da API`)
};

const ru_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Справочник API`)
};

const sv_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-referens`)
};

const tr_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API başvurusu`)
};

const zh_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 参考`)
};

const ja_content_dev_link_docs_title = /** @type {(inputs: Content_Dev_Link_Docs_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API リファレンス`)
};

/**
* | output |
* | --- |
* | "API reference" |
*
* @param {Content_Dev_Link_Docs_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_link_docs_title = /** @type {((inputs?: Content_Dev_Link_Docs_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Link_Docs_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_link_docs_title(inputs)
	if (locale === "de") return de_content_dev_link_docs_title(inputs)
	if (locale === "fr") return fr_content_dev_link_docs_title(inputs)
	if (locale === "it") return it_content_dev_link_docs_title(inputs)
	if (locale === "nl") return nl_content_dev_link_docs_title(inputs)
	if (locale === "pl") return pl_content_dev_link_docs_title(inputs)
	if (locale === "pt") return pt_content_dev_link_docs_title(inputs)
	if (locale === "ru") return ru_content_dev_link_docs_title(inputs)
	if (locale === "sv") return sv_content_dev_link_docs_title(inputs)
	if (locale === "tr") return tr_content_dev_link_docs_title(inputs)
	if (locale === "zh") return zh_content_dev_link_docs_title(inputs)
	if (locale === "ja") return ja_content_dev_link_docs_title(inputs)
	return en_content_dev_link_docs_title(inputs)
});

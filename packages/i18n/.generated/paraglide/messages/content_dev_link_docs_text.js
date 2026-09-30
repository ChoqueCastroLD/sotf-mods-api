/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Link_Docs_TextInputs */

const en_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every v2 endpoint with schemas and examples, interactive.`)
};

const es_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los endpoints v2 con esquemas y ejemplos, interactiva.`)
};

const de_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle v2-Endpunkte mit Schemas und Beispielen, interaktiv.`)
};

const fr_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les endpoints v2 avec schémas et exemples, interactive.`)
};

const it_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti gli endpoint v2 con schemi ed esempi, interattivo.`)
};

const nl_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle v2-endpoints met schema’s en voorbeelden, interactief.`)
};

const pl_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie endpointy v2 ze schematami i przykładami, interaktywnie.`)
};

const pt_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os endpoints v2 com esquemas e exemplos, interativa.`)
};

const ru_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все эндпоинты v2 со схемами и примерами, интерактивно.`)
};

const sv_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla v2-slutpunkter med scheman och exempel, interaktivt.`)
};

const tr_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şemalar ve örneklerle tüm v2 uç noktaları, etkileşimli.`)
};

const zh_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有 v2 接口，含结构与示例，可交互。`)
};

const ja_content_dev_link_docs_text = /** @type {(inputs: Content_Dev_Link_Docs_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての v2 エンドポイントをスキーマと例つきで。インタラクティブ。`)
};

/**
* | output |
* | --- |
* | "Every v2 endpoint with schemas and examples, interactive." |
*
* @param {Content_Dev_Link_Docs_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_link_docs_text = /** @type {((inputs?: Content_Dev_Link_Docs_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Link_Docs_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_link_docs_text(inputs)
	if (locale === "de") return de_content_dev_link_docs_text(inputs)
	if (locale === "fr") return fr_content_dev_link_docs_text(inputs)
	if (locale === "it") return it_content_dev_link_docs_text(inputs)
	if (locale === "nl") return nl_content_dev_link_docs_text(inputs)
	if (locale === "pl") return pl_content_dev_link_docs_text(inputs)
	if (locale === "pt") return pt_content_dev_link_docs_text(inputs)
	if (locale === "ru") return ru_content_dev_link_docs_text(inputs)
	if (locale === "sv") return sv_content_dev_link_docs_text(inputs)
	if (locale === "tr") return tr_content_dev_link_docs_text(inputs)
	if (locale === "zh") return zh_content_dev_link_docs_text(inputs)
	if (locale === "ja") return ja_content_dev_link_docs_text(inputs)
	return en_content_dev_link_docs_text(inputs)
});

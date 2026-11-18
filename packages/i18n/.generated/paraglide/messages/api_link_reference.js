/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Link_ReferenceInputs */

const en_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reference`)
};

const es_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referencia`)
};

const de_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referenz`)
};

const fr_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Référence`)
};

const it_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riferimento`)
};

const nl_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referentie`)
};

const pl_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dokumentacja`)
};

const pt_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referência`)
};

const ru_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Справочник`)
};

const sv_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Referens`)
};

const tr_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru`)
};

const zh_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参考文档`)
};

const ja_api_link_reference = /** @type {(inputs: Api_Link_ReferenceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リファレンス`)
};

/**
* | output |
* | --- |
* | "Reference" |
*
* @param {Api_Link_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_link_reference = /** @type {((inputs?: Api_Link_ReferenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Link_ReferenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_link_reference(inputs)
	if (locale === "de") return de_api_link_reference(inputs)
	if (locale === "fr") return fr_api_link_reference(inputs)
	if (locale === "it") return it_api_link_reference(inputs)
	if (locale === "nl") return nl_api_link_reference(inputs)
	if (locale === "pl") return pl_api_link_reference(inputs)
	if (locale === "pt") return pt_api_link_reference(inputs)
	if (locale === "ru") return ru_api_link_reference(inputs)
	if (locale === "sv") return sv_api_link_reference(inputs)
	if (locale === "tr") return tr_api_link_reference(inputs)
	if (locale === "zh") return zh_api_link_reference(inputs)
	if (locale === "ja") return ja_api_link_reference(inputs)
	return en_api_link_reference(inputs)
});

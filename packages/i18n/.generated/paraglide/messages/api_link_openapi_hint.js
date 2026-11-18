/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Link_Openapi_HintInputs */

const en_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Machine-readable description`)
};

const es_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción legible por máquinas`)
};

const de_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maschinenlesbare Beschreibung`)
};

const fr_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description lisible par les machines`)
};

const it_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione leggibile dalle macchine`)
};

const nl_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Machineleesbare beschrijving`)
};

const pl_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis czytelny dla maszyn`)
};

const pt_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição legível por máquinas`)
};

const ru_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Машиночитаемое описание`)
};

const sv_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maskinläsbar beskrivning`)
};

const tr_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makinelerin okuyabildiği açıklama`)
};

const zh_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`机器可读的描述`)
};

const ja_api_link_openapi_hint = /** @type {(inputs: Api_Link_Openapi_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`機械可読の説明`)
};

/**
* | output |
* | --- |
* | "Machine-readable description" |
*
* @param {Api_Link_Openapi_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_link_openapi_hint = /** @type {((inputs?: Api_Link_Openapi_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Link_Openapi_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_link_openapi_hint(inputs)
	if (locale === "de") return de_api_link_openapi_hint(inputs)
	if (locale === "fr") return fr_api_link_openapi_hint(inputs)
	if (locale === "it") return it_api_link_openapi_hint(inputs)
	if (locale === "nl") return nl_api_link_openapi_hint(inputs)
	if (locale === "pl") return pl_api_link_openapi_hint(inputs)
	if (locale === "pt") return pt_api_link_openapi_hint(inputs)
	if (locale === "ru") return ru_api_link_openapi_hint(inputs)
	if (locale === "sv") return sv_api_link_openapi_hint(inputs)
	if (locale === "tr") return tr_api_link_openapi_hint(inputs)
	if (locale === "zh") return zh_api_link_openapi_hint(inputs)
	if (locale === "ja") return ja_api_link_openapi_hint(inputs)
	return en_api_link_openapi_hint(inputs)
});

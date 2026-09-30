/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Link_Openapi_TextInputs */

const en_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The machine-readable spec, to generate a client.`)
};

const es_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La especificación legible por máquinas, para generar un cliente.`)
};

const de_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die maschinenlesbare Spezifikation, um einen Client zu generieren.`)
};

const fr_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La spécification lisible par machine, pour générer un client.`)
};

const it_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La specifica leggibile dalle macchine, per generare un client.`)
};

const nl_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De machineleesbare specificatie, om een client te genereren.`)
};

const pl_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Specyfikacja do odczytu maszynowego, do wygenerowania klienta.`)
};

const pt_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A especificação legível por máquina, para gerar um cliente.`)
};

const ru_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Машиночитаемая спецификация для генерации клиента.`)
};

const sv_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den maskinläsbara specifikationen, för att generera en klient.`)
};

const tr_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstemci üretmek için makine tarafından okunabilir belirtim.`)
};

const zh_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`机器可读的规范，可用于生成客户端。`)
};

const ja_content_dev_link_openapi_text = /** @type {(inputs: Content_Dev_Link_Openapi_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クライアント生成用の機械可読な仕様。`)
};

/**
* | output |
* | --- |
* | "The machine-readable spec, to generate a client." |
*
* @param {Content_Dev_Link_Openapi_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_link_openapi_text = /** @type {((inputs?: Content_Dev_Link_Openapi_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Link_Openapi_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_link_openapi_text(inputs)
	if (locale === "de") return de_content_dev_link_openapi_text(inputs)
	if (locale === "fr") return fr_content_dev_link_openapi_text(inputs)
	if (locale === "it") return it_content_dev_link_openapi_text(inputs)
	if (locale === "nl") return nl_content_dev_link_openapi_text(inputs)
	if (locale === "pl") return pl_content_dev_link_openapi_text(inputs)
	if (locale === "pt") return pt_content_dev_link_openapi_text(inputs)
	if (locale === "ru") return ru_content_dev_link_openapi_text(inputs)
	if (locale === "sv") return sv_content_dev_link_openapi_text(inputs)
	if (locale === "tr") return tr_content_dev_link_openapi_text(inputs)
	if (locale === "zh") return zh_content_dev_link_openapi_text(inputs)
	if (locale === "ja") return ja_content_dev_link_openapi_text(inputs)
	return en_content_dev_link_openapi_text(inputs)
});

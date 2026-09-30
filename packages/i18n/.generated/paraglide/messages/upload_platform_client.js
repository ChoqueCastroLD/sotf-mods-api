/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Platform_ClientInputs */

const en_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const es_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente`)
};

const de_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const fr_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const it_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const nl_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const pl_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient`)
};

const pt_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente`)
};

const ru_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клиент`)
};

const sv_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient`)
};

const tr_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstemci`)
};

const zh_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`客户端`)
};

const ja_upload_platform_client = /** @type {(inputs: Upload_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クライアント`)
};

/**
* | output |
* | --- |
* | "Client" |
*
* @param {Upload_Platform_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_platform_client = /** @type {((inputs?: Upload_Platform_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Platform_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_platform_client(inputs)
	if (locale === "de") return de_upload_platform_client(inputs)
	if (locale === "fr") return fr_upload_platform_client(inputs)
	if (locale === "it") return it_upload_platform_client(inputs)
	if (locale === "nl") return nl_upload_platform_client(inputs)
	if (locale === "pl") return pl_upload_platform_client(inputs)
	if (locale === "pt") return pt_upload_platform_client(inputs)
	if (locale === "ru") return ru_upload_platform_client(inputs)
	if (locale === "sv") return sv_upload_platform_client(inputs)
	if (locale === "tr") return tr_upload_platform_client(inputs)
	if (locale === "zh") return zh_upload_platform_client(inputs)
	if (locale === "ja") return ja_upload_platform_client(inputs)
	return en_upload_platform_client(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Platform_ServerInputs */

const en_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const es_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor`)
};

const de_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const fr_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur`)
};

const it_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const nl_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const pl_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer`)
};

const pt_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor`)
};

const ru_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сервер`)
};

const sv_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const tr_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunucu`)
};

const zh_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器`)
};

const ja_upload_platform_server = /** @type {(inputs: Upload_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバー`)
};

/**
* | output |
* | --- |
* | "Server" |
*
* @param {Upload_Platform_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_platform_server = /** @type {((inputs?: Upload_Platform_ServerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Platform_ServerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_platform_server(inputs)
	if (locale === "de") return de_upload_platform_server(inputs)
	if (locale === "fr") return fr_upload_platform_server(inputs)
	if (locale === "it") return it_upload_platform_server(inputs)
	if (locale === "nl") return nl_upload_platform_server(inputs)
	if (locale === "pl") return pl_upload_platform_server(inputs)
	if (locale === "pt") return pt_upload_platform_server(inputs)
	if (locale === "ru") return ru_upload_platform_server(inputs)
	if (locale === "sv") return sv_upload_platform_server(inputs)
	if (locale === "tr") return tr_upload_platform_server(inputs)
	if (locale === "zh") return zh_upload_platform_server(inputs)
	if (locale === "ja") return ja_upload_platform_server(inputs)
	return en_upload_platform_server(inputs)
});

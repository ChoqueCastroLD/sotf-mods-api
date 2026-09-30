/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Platform_UniversalInputs */

const en_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client and server`)
};

const es_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente y servidor`)
};

const de_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client und Server`)
};

const fr_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client et serveur`)
};

const it_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client e server`)
};

const nl_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client en server`)
};

const pl_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient i serwer`)
};

const pt_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente e servidor`)
};

const ru_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клиент и сервер`)
};

const sv_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient och server`)
};

const tr_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstemci ve sunucu`)
};

const zh_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`客户端和服务器`)
};

const ja_mod_platform_universal = /** @type {(inputs: Mod_Platform_UniversalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クライアントとサーバー`)
};

/**
* | output |
* | --- |
* | "Client and server" |
*
* @param {Mod_Platform_UniversalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_platform_universal = /** @type {((inputs?: Mod_Platform_UniversalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Platform_UniversalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_platform_universal(inputs)
	if (locale === "de") return de_mod_platform_universal(inputs)
	if (locale === "fr") return fr_mod_platform_universal(inputs)
	if (locale === "it") return it_mod_platform_universal(inputs)
	if (locale === "nl") return nl_mod_platform_universal(inputs)
	if (locale === "pl") return pl_mod_platform_universal(inputs)
	if (locale === "pt") return pt_mod_platform_universal(inputs)
	if (locale === "ru") return ru_mod_platform_universal(inputs)
	if (locale === "sv") return sv_mod_platform_universal(inputs)
	if (locale === "tr") return tr_mod_platform_universal(inputs)
	if (locale === "zh") return zh_mod_platform_universal(inputs)
	if (locale === "ja") return ja_mod_platform_universal(inputs)
	return en_mod_platform_universal(inputs)
});

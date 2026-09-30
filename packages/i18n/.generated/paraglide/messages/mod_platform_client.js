/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Platform_ClientInputs */

const en_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const es_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente`)
};

const de_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const fr_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const it_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const nl_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const pl_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient`)
};

const pt_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente`)
};

const ru_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клиент`)
};

const sv_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient`)
};

const tr_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstemci`)
};

const zh_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`客户端`)
};

const ja_mod_platform_client = /** @type {(inputs: Mod_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クライアント`)
};

/**
* | output |
* | --- |
* | "Client" |
*
* @param {Mod_Platform_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_platform_client = /** @type {((inputs?: Mod_Platform_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Platform_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_platform_client(inputs)
	if (locale === "de") return de_mod_platform_client(inputs)
	if (locale === "fr") return fr_mod_platform_client(inputs)
	if (locale === "it") return it_mod_platform_client(inputs)
	if (locale === "nl") return nl_mod_platform_client(inputs)
	if (locale === "pl") return pl_mod_platform_client(inputs)
	if (locale === "pt") return pt_mod_platform_client(inputs)
	if (locale === "ru") return ru_mod_platform_client(inputs)
	if (locale === "sv") return sv_mod_platform_client(inputs)
	if (locale === "tr") return tr_mod_platform_client(inputs)
	if (locale === "zh") return zh_mod_platform_client(inputs)
	if (locale === "ja") return ja_mod_platform_client(inputs)
	return en_mod_platform_client(inputs)
});

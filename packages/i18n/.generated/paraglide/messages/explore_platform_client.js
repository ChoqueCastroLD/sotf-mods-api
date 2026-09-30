/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Platform_ClientInputs */

const en_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const es_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente`)
};

const de_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const fr_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const it_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const nl_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const pl_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient`)
};

const pt_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente`)
};

const ru_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клиент`)
};

const sv_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient`)
};

const tr_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstemci`)
};

const zh_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`客户端`)
};

const ja_explore_platform_client = /** @type {(inputs: Explore_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クライアント`)
};

/**
* | output |
* | --- |
* | "Client" |
*
* @param {Explore_Platform_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_platform_client = /** @type {((inputs?: Explore_Platform_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Platform_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_platform_client(inputs)
	if (locale === "de") return de_explore_platform_client(inputs)
	if (locale === "fr") return fr_explore_platform_client(inputs)
	if (locale === "it") return it_explore_platform_client(inputs)
	if (locale === "nl") return nl_explore_platform_client(inputs)
	if (locale === "pl") return pl_explore_platform_client(inputs)
	if (locale === "pt") return pt_explore_platform_client(inputs)
	if (locale === "ru") return ru_explore_platform_client(inputs)
	if (locale === "sv") return sv_explore_platform_client(inputs)
	if (locale === "tr") return tr_explore_platform_client(inputs)
	if (locale === "zh") return zh_explore_platform_client(inputs)
	if (locale === "ja") return ja_explore_platform_client(inputs)
	return en_explore_platform_client(inputs)
});

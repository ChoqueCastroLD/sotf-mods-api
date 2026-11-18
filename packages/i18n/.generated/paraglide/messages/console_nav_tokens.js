/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_TokensInputs */

const en_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API keys`)
};

const es_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claves de API`)
};

const de_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-Schlüssel`)
};

const fr_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clés d’API`)
};

const it_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiavi API`)
};

const nl_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-sleutels`)
};

const pl_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klucze API`)
};

const pt_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaves de API`)
};

const ru_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-ключи`)
};

const sv_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-nycklar`)
};

const tr_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API anahtarları`)
};

const zh_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 密钥`)
};

const ja_console_nav_tokens = /** @type {(inputs: Console_Nav_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API キー`)
};

/**
* | output |
* | --- |
* | "API keys" |
*
* @param {Console_Nav_TokensInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_tokens = /** @type {((inputs?: Console_Nav_TokensInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_TokensInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_tokens(inputs)
	if (locale === "de") return de_console_nav_tokens(inputs)
	if (locale === "fr") return fr_console_nav_tokens(inputs)
	if (locale === "it") return it_console_nav_tokens(inputs)
	if (locale === "nl") return nl_console_nav_tokens(inputs)
	if (locale === "pl") return pl_console_nav_tokens(inputs)
	if (locale === "pt") return pt_console_nav_tokens(inputs)
	if (locale === "ru") return ru_console_nav_tokens(inputs)
	if (locale === "sv") return sv_console_nav_tokens(inputs)
	if (locale === "tr") return tr_console_nav_tokens(inputs)
	if (locale === "zh") return zh_console_nav_tokens(inputs)
	if (locale === "ja") return ja_console_nav_tokens(inputs)
	return en_console_nav_tokens(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_TitleInputs */

const en_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API keys`)
};

const es_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claves de API`)
};

const de_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-Schlüssel`)
};

const fr_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clés d’API`)
};

const it_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiavi API`)
};

const nl_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-sleutels`)
};

const pl_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klucze API`)
};

const pt_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaves de API`)
};

const ru_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-ключи`)
};

const sv_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-nycklar`)
};

const tr_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API anahtarları`)
};

const zh_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 密钥`)
};

const ja_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API キー`)
};

/**
* | output |
* | --- |
* | "API keys" |
*
* @param {Tokens_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_title = /** @type {((inputs?: Tokens_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_title(inputs)
	if (locale === "de") return de_tokens_title(inputs)
	if (locale === "fr") return fr_tokens_title(inputs)
	if (locale === "it") return it_tokens_title(inputs)
	if (locale === "nl") return nl_tokens_title(inputs)
	if (locale === "pl") return pl_tokens_title(inputs)
	if (locale === "pt") return pt_tokens_title(inputs)
	if (locale === "ru") return ru_tokens_title(inputs)
	if (locale === "sv") return sv_tokens_title(inputs)
	if (locale === "tr") return tr_tokens_title(inputs)
	if (locale === "zh") return zh_tokens_title(inputs)
	if (locale === "ja") return ja_tokens_title(inputs)
	return en_tokens_title(inputs)
});

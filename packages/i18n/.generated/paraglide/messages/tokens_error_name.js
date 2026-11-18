/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Error_NameInputs */

const en_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give the key a name.`)
};

const es_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponle un nombre a la clave.`)
};

const de_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib dem Schlüssel einen Namen.`)
};

const fr_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Donnez un nom à la clé.`)
};

const it_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dai un nome alla chiave.`)
};

const nl_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geef de sleutel een naam.`)
};

const pl_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nadaj kluczowi nazwę.`)
};

const pt_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dê um nome à chave.`)
};

const ru_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дайте ключу название.`)
};

const sv_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ge nyckeln ett namn.`)
};

const tr_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anahtara bir ad ver.`)
};

const zh_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`给密钥起个名字。`)
};

const ja_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーに名前を付けてください。`)
};

/**
* | output |
* | --- |
* | "Give the key a name." |
*
* @param {Tokens_Error_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_error_name = /** @type {((inputs?: Tokens_Error_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Error_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_error_name(inputs)
	if (locale === "de") return de_tokens_error_name(inputs)
	if (locale === "fr") return fr_tokens_error_name(inputs)
	if (locale === "it") return it_tokens_error_name(inputs)
	if (locale === "nl") return nl_tokens_error_name(inputs)
	if (locale === "pl") return pl_tokens_error_name(inputs)
	if (locale === "pt") return pt_tokens_error_name(inputs)
	if (locale === "ru") return ru_tokens_error_name(inputs)
	if (locale === "sv") return sv_tokens_error_name(inputs)
	if (locale === "tr") return tr_tokens_error_name(inputs)
	if (locale === "zh") return zh_tokens_error_name(inputs)
	if (locale === "ja") return ja_tokens_error_name(inputs)
	return en_tokens_error_name(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Error_NameInputs */

const en_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give the token a name.`)
};

const es_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponle un nombre al token.`)
};

const de_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib dem Token einen Namen.`)
};

const fr_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Donnez un nom au jeton.`)
};

const it_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dai un nome al token.`)
};

const nl_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geef het token een naam.`)
};

const pl_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nadaj tokenowi nazwę.`)
};

const pt_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dê um nome ao token.`)
};

const ru_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите название токена.`)
};

const sv_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ge token ett namn.`)
};

const tr_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtece bir ad ver.`)
};

const zh_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请为令牌命名。`)
};

const ja_tokens_error_name = /** @type {(inputs: Tokens_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トークンに名前を付けてください。`)
};

/**
* | output |
* | --- |
* | "Give the token a name." |
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

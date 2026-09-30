/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Scope_ReadInputs */

const en_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read`)
};

const es_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lectura`)
};

const de_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lesen`)
};

const fr_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lecture`)
};

const it_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lettura`)
};

const nl_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lezen`)
};

const pl_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odczyt`)
};

const pt_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leitura`)
};

const ru_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чтение`)
};

const sv_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läsa`)
};

const tr_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okuma`)
};

const zh_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取`)
};

const ja_tokens_scope_read = /** @type {(inputs: Tokens_Scope_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み取り`)
};

/**
* | output |
* | --- |
* | "Read" |
*
* @param {Tokens_Scope_ReadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_scope_read = /** @type {((inputs?: Tokens_Scope_ReadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scope_ReadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_scope_read(inputs)
	if (locale === "de") return de_tokens_scope_read(inputs)
	if (locale === "fr") return fr_tokens_scope_read(inputs)
	if (locale === "it") return it_tokens_scope_read(inputs)
	if (locale === "nl") return nl_tokens_scope_read(inputs)
	if (locale === "pl") return pl_tokens_scope_read(inputs)
	if (locale === "pt") return pt_tokens_scope_read(inputs)
	if (locale === "ru") return ru_tokens_scope_read(inputs)
	if (locale === "sv") return sv_tokens_scope_read(inputs)
	if (locale === "tr") return tr_tokens_scope_read(inputs)
	if (locale === "zh") return zh_tokens_scope_read(inputs)
	if (locale === "ja") return ja_tokens_scope_read(inputs)
	return en_tokens_scope_read(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Secret_CopyInputs */

const en_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy`)
};

const es_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const de_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieren`)
};

const fr_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier`)
};

const it_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia`)
};

const nl_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiëren`)
};

const pl_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj`)
};

const pt_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const ru_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать`)
};

const sv_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera`)
};

const tr_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyala`)
};

const zh_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制`)
};

const ja_tokens_secret_copy = /** @type {(inputs: Tokens_Secret_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピー`)
};

/**
* | output |
* | --- |
* | "Copy" |
*
* @param {Tokens_Secret_CopyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_secret_copy = /** @type {((inputs?: Tokens_Secret_CopyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Secret_CopyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_secret_copy(inputs)
	if (locale === "de") return de_tokens_secret_copy(inputs)
	if (locale === "fr") return fr_tokens_secret_copy(inputs)
	if (locale === "it") return it_tokens_secret_copy(inputs)
	if (locale === "nl") return nl_tokens_secret_copy(inputs)
	if (locale === "pl") return pl_tokens_secret_copy(inputs)
	if (locale === "pt") return pt_tokens_secret_copy(inputs)
	if (locale === "ru") return ru_tokens_secret_copy(inputs)
	if (locale === "sv") return sv_tokens_secret_copy(inputs)
	if (locale === "tr") return tr_tokens_secret_copy(inputs)
	if (locale === "zh") return zh_tokens_secret_copy(inputs)
	if (locale === "ja") return ja_tokens_secret_copy(inputs)
	return en_tokens_secret_copy(inputs)
});

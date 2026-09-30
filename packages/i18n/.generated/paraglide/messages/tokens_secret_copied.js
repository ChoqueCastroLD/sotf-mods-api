/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Secret_CopiedInputs */

const en_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied`)
};

const es_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const de_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiert`)
};

const fr_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copié`)
};

const it_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiato`)
};

const nl_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gekopieerd`)
};

const pl_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano`)
};

const pt_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const ru_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопировано`)
};

const sv_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopierad`)
};

const tr_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyalandı`)
};

const zh_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制`)
};

const ja_tokens_secret_copied = /** @type {(inputs: Tokens_Secret_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーしました`)
};

/**
* | output |
* | --- |
* | "Copied" |
*
* @param {Tokens_Secret_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_secret_copied = /** @type {((inputs?: Tokens_Secret_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Secret_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_secret_copied(inputs)
	if (locale === "de") return de_tokens_secret_copied(inputs)
	if (locale === "fr") return fr_tokens_secret_copied(inputs)
	if (locale === "it") return it_tokens_secret_copied(inputs)
	if (locale === "nl") return nl_tokens_secret_copied(inputs)
	if (locale === "pl") return pl_tokens_secret_copied(inputs)
	if (locale === "pt") return pt_tokens_secret_copied(inputs)
	if (locale === "ru") return ru_tokens_secret_copied(inputs)
	if (locale === "sv") return sv_tokens_secret_copied(inputs)
	if (locale === "tr") return tr_tokens_secret_copied(inputs)
	if (locale === "zh") return zh_tokens_secret_copied(inputs)
	if (locale === "ja") return ja_tokens_secret_copied(inputs)
	return en_tokens_secret_copied(inputs)
});

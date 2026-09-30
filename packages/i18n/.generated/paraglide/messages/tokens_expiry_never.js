/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Expiry_NeverInputs */

const en_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Never`)
};

const es_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca`)
};

const de_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie`)
};

const fr_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jamais`)
};

const it_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mai`)
};

const nl_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nooit`)
};

const pl_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nigdy`)
};

const pt_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca`)
};

const ru_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Никогда`)
};

const sv_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aldrig`)
};

const tr_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asla`)
};

const zh_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`永不`)
};

const ja_tokens_expiry_never = /** @type {(inputs: Tokens_Expiry_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無期限`)
};

/**
* | output |
* | --- |
* | "Never" |
*
* @param {Tokens_Expiry_NeverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_expiry_never = /** @type {((inputs?: Tokens_Expiry_NeverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Expiry_NeverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_expiry_never(inputs)
	if (locale === "de") return de_tokens_expiry_never(inputs)
	if (locale === "fr") return fr_tokens_expiry_never(inputs)
	if (locale === "it") return it_tokens_expiry_never(inputs)
	if (locale === "nl") return nl_tokens_expiry_never(inputs)
	if (locale === "pl") return pl_tokens_expiry_never(inputs)
	if (locale === "pt") return pt_tokens_expiry_never(inputs)
	if (locale === "ru") return ru_tokens_expiry_never(inputs)
	if (locale === "sv") return sv_tokens_expiry_never(inputs)
	if (locale === "tr") return tr_tokens_expiry_never(inputs)
	if (locale === "zh") return zh_tokens_expiry_never(inputs)
	if (locale === "ja") return ja_tokens_expiry_never(inputs)
	return en_tokens_expiry_never(inputs)
});

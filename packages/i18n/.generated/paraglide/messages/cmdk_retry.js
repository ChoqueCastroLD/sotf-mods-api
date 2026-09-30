/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_RetryInputs */

const en_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_cmdk_retry = /** @type {(inputs: Cmdk_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Cmdk_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_retry = /** @type {((inputs?: Cmdk_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_retry(inputs)
	if (locale === "de") return de_cmdk_retry(inputs)
	if (locale === "fr") return fr_cmdk_retry(inputs)
	if (locale === "it") return it_cmdk_retry(inputs)
	if (locale === "nl") return nl_cmdk_retry(inputs)
	if (locale === "pl") return pl_cmdk_retry(inputs)
	if (locale === "pt") return pt_cmdk_retry(inputs)
	if (locale === "ru") return ru_cmdk_retry(inputs)
	if (locale === "sv") return sv_cmdk_retry(inputs)
	if (locale === "tr") return tr_cmdk_retry(inputs)
	if (locale === "zh") return zh_cmdk_retry(inputs)
	if (locale === "ja") return ja_cmdk_retry(inputs)
	return en_cmdk_retry(inputs)
});

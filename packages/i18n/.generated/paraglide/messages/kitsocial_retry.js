/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_RetryInputs */

const en_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar novamente`)
};

const ru_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_kitsocial_retry = /** @type {(inputs: Kitsocial_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Kitsocial_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_retry = /** @type {((inputs?: Kitsocial_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_retry(inputs)
	if (locale === "de") return de_kitsocial_retry(inputs)
	if (locale === "fr") return fr_kitsocial_retry(inputs)
	if (locale === "it") return it_kitsocial_retry(inputs)
	if (locale === "nl") return nl_kitsocial_retry(inputs)
	if (locale === "pl") return pl_kitsocial_retry(inputs)
	if (locale === "pt") return pt_kitsocial_retry(inputs)
	if (locale === "ru") return ru_kitsocial_retry(inputs)
	if (locale === "sv") return sv_kitsocial_retry(inputs)
	if (locale === "tr") return tr_kitsocial_retry(inputs)
	if (locale === "zh") return zh_kitsocial_retry(inputs)
	if (locale === "ja") return ja_kitsocial_retry(inputs)
	return en_kitsocial_retry(inputs)
});

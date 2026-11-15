/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_RetryInputs */

const en_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_modpacks_retry = /** @type {(inputs: Modpacks_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Modpacks_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_retry = /** @type {((inputs?: Modpacks_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_retry(inputs)
	if (locale === "de") return de_modpacks_retry(inputs)
	if (locale === "fr") return fr_modpacks_retry(inputs)
	if (locale === "it") return it_modpacks_retry(inputs)
	if (locale === "nl") return nl_modpacks_retry(inputs)
	if (locale === "pl") return pl_modpacks_retry(inputs)
	if (locale === "pt") return pt_modpacks_retry(inputs)
	if (locale === "ru") return ru_modpacks_retry(inputs)
	if (locale === "sv") return sv_modpacks_retry(inputs)
	if (locale === "tr") return tr_modpacks_retry(inputs)
	if (locale === "zh") return zh_modpacks_retry(inputs)
	if (locale === "ja") return ja_modpacks_retry(inputs)
	return en_modpacks_retry(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_RetryInputs */

const en_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_ranger_retry = /** @type {(inputs: Ranger_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Ranger_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_retry = /** @type {((inputs?: Ranger_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_retry(inputs)
	if (locale === "de") return de_ranger_retry(inputs)
	if (locale === "fr") return fr_ranger_retry(inputs)
	if (locale === "it") return it_ranger_retry(inputs)
	if (locale === "nl") return nl_ranger_retry(inputs)
	if (locale === "pl") return pl_ranger_retry(inputs)
	if (locale === "pt") return pt_ranger_retry(inputs)
	if (locale === "ru") return ru_ranger_retry(inputs)
	if (locale === "sv") return sv_ranger_retry(inputs)
	if (locale === "tr") return tr_ranger_retry(inputs)
	if (locale === "zh") return zh_ranger_retry(inputs)
	if (locale === "ja") return ja_ranger_retry(inputs)
	return en_ranger_retry(inputs)
});

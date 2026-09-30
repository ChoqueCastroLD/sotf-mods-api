/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_RetryInputs */

const en_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden dene`)
};

const zh_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_basecamp_retry = /** @type {(inputs: Basecamp_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Basecamp_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_retry = /** @type {((inputs?: Basecamp_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_retry(inputs)
	if (locale === "de") return de_basecamp_retry(inputs)
	if (locale === "fr") return fr_basecamp_retry(inputs)
	if (locale === "it") return it_basecamp_retry(inputs)
	if (locale === "nl") return nl_basecamp_retry(inputs)
	if (locale === "pl") return pl_basecamp_retry(inputs)
	if (locale === "pt") return pt_basecamp_retry(inputs)
	if (locale === "ru") return ru_basecamp_retry(inputs)
	if (locale === "sv") return sv_basecamp_retry(inputs)
	if (locale === "tr") return tr_basecamp_retry(inputs)
	if (locale === "zh") return zh_basecamp_retry(inputs)
	if (locale === "ja") return ja_basecamp_retry(inputs)
	return en_basecamp_retry(inputs)
});

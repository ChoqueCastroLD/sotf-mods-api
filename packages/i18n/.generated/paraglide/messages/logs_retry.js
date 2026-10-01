/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_RetryInputs */

const en_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_logs_retry = /** @type {(inputs: Logs_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Logs_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_retry = /** @type {((inputs?: Logs_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_retry(inputs)
	if (locale === "de") return de_logs_retry(inputs)
	if (locale === "fr") return fr_logs_retry(inputs)
	if (locale === "it") return it_logs_retry(inputs)
	if (locale === "nl") return nl_logs_retry(inputs)
	if (locale === "pl") return pl_logs_retry(inputs)
	if (locale === "pt") return pt_logs_retry(inputs)
	if (locale === "ru") return ru_logs_retry(inputs)
	if (locale === "sv") return sv_logs_retry(inputs)
	if (locale === "tr") return tr_logs_retry(inputs)
	if (locale === "zh") return zh_logs_retry(inputs)
	if (locale === "ja") return ja_logs_retry(inputs)
	return en_logs_retry(inputs)
});

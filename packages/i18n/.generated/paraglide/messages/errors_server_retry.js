/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Server_RetryInputs */

const en_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_errors_server_retry = /** @type {(inputs: Errors_Server_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Errors_Server_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_server_retry = /** @type {((inputs?: Errors_Server_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Server_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_server_retry(inputs)
	if (locale === "de") return de_errors_server_retry(inputs)
	if (locale === "fr") return fr_errors_server_retry(inputs)
	if (locale === "it") return it_errors_server_retry(inputs)
	if (locale === "nl") return nl_errors_server_retry(inputs)
	if (locale === "pl") return pl_errors_server_retry(inputs)
	if (locale === "pt") return pt_errors_server_retry(inputs)
	if (locale === "ru") return ru_errors_server_retry(inputs)
	if (locale === "sv") return sv_errors_server_retry(inputs)
	if (locale === "tr") return tr_errors_server_retry(inputs)
	if (locale === "zh") return zh_errors_server_retry(inputs)
	if (locale === "ja") return ja_errors_server_retry(inputs)
	return en_errors_server_retry(inputs)
});

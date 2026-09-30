/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_RetryInputs */

const en_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_signals_retry = /** @type {(inputs: Signals_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Signals_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_retry = /** @type {((inputs?: Signals_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_retry(inputs)
	if (locale === "de") return de_signals_retry(inputs)
	if (locale === "fr") return fr_signals_retry(inputs)
	if (locale === "it") return it_signals_retry(inputs)
	if (locale === "nl") return nl_signals_retry(inputs)
	if (locale === "pl") return pl_signals_retry(inputs)
	if (locale === "pt") return pt_signals_retry(inputs)
	if (locale === "ru") return ru_signals_retry(inputs)
	if (locale === "sv") return sv_signals_retry(inputs)
	if (locale === "tr") return tr_signals_retry(inputs)
	if (locale === "zh") return zh_signals_retry(inputs)
	if (locale === "ja") return ja_signals_retry(inputs)
	return en_signals_retry(inputs)
});

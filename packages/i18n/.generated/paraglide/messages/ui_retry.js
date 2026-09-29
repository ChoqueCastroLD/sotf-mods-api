/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_RetryInputs */

const en_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_ui_retry = /** @type {(inputs: Ui_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Ui_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_retry = /** @type {((inputs?: Ui_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_retry(inputs)
	if (locale === "de") return de_ui_retry(inputs)
	if (locale === "fr") return fr_ui_retry(inputs)
	if (locale === "it") return it_ui_retry(inputs)
	if (locale === "nl") return nl_ui_retry(inputs)
	if (locale === "pl") return pl_ui_retry(inputs)
	if (locale === "pt") return pt_ui_retry(inputs)
	if (locale === "ru") return ru_ui_retry(inputs)
	if (locale === "sv") return sv_ui_retry(inputs)
	if (locale === "tr") return tr_ui_retry(inputs)
	if (locale === "zh") return zh_ui_retry(inputs)
	if (locale === "ja") return ja_ui_retry(inputs)
	return en_ui_retry(inputs)
});

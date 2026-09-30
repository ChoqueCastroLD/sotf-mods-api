/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_RetryInputs */

const en_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_settings_retry = /** @type {(inputs: Settings_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Settings_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_retry = /** @type {((inputs?: Settings_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_retry(inputs)
	if (locale === "de") return de_settings_retry(inputs)
	if (locale === "fr") return fr_settings_retry(inputs)
	if (locale === "it") return it_settings_retry(inputs)
	if (locale === "nl") return nl_settings_retry(inputs)
	if (locale === "pl") return pl_settings_retry(inputs)
	if (locale === "pt") return pt_settings_retry(inputs)
	if (locale === "ru") return ru_settings_retry(inputs)
	if (locale === "sv") return sv_settings_retry(inputs)
	if (locale === "tr") return tr_settings_retry(inputs)
	if (locale === "zh") return zh_settings_retry(inputs)
	if (locale === "ja") return ja_settings_retry(inputs)
	return en_settings_retry(inputs)
});

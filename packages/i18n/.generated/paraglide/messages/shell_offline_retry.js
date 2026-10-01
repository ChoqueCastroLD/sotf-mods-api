/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_RetryInputs */

const en_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar novamente`)
};

const ru_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_shell_offline_retry = /** @type {(inputs: Shell_Offline_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Shell_Offline_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_retry = /** @type {((inputs?: Shell_Offline_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_retry(inputs)
	if (locale === "de") return de_shell_offline_retry(inputs)
	if (locale === "fr") return fr_shell_offline_retry(inputs)
	if (locale === "it") return it_shell_offline_retry(inputs)
	if (locale === "nl") return nl_shell_offline_retry(inputs)
	if (locale === "pl") return pl_shell_offline_retry(inputs)
	if (locale === "pt") return pt_shell_offline_retry(inputs)
	if (locale === "ru") return ru_shell_offline_retry(inputs)
	if (locale === "sv") return sv_shell_offline_retry(inputs)
	if (locale === "tr") return tr_shell_offline_retry(inputs)
	if (locale === "zh") return zh_shell_offline_retry(inputs)
	if (locale === "ja") return ja_shell_offline_retry(inputs)
	return en_shell_offline_retry(inputs)
});

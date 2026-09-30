/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_TimeoutInputs */

const en_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timeout (ms)`)
};

const es_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiempo de espera (ms)`)
};

const de_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitlimit (ms)`)
};

const fr_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Délai d’attente (ms)`)
};

const it_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timeout (ms)`)
};

const nl_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Time-out (ms)`)
};

const pl_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit czasu (ms)`)
};

const pt_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tempo limite (ms)`)
};

const ru_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тайм-аут (мс)`)
};

const sv_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tidsgräns (ms)`)
};

const tr_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaman aşımı (ms)`)
};

const zh_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`超时（毫秒）`)
};

const ja_admin_kelvin_timeout = /** @type {(inputs: Admin_Kelvin_TimeoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイムアウト（ms）`)
};

/**
* | output |
* | --- |
* | "Timeout (ms)" |
*
* @param {Admin_Kelvin_TimeoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_timeout = /** @type {((inputs?: Admin_Kelvin_TimeoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_TimeoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_timeout(inputs)
	if (locale === "de") return de_admin_kelvin_timeout(inputs)
	if (locale === "fr") return fr_admin_kelvin_timeout(inputs)
	if (locale === "it") return it_admin_kelvin_timeout(inputs)
	if (locale === "nl") return nl_admin_kelvin_timeout(inputs)
	if (locale === "pl") return pl_admin_kelvin_timeout(inputs)
	if (locale === "pt") return pt_admin_kelvin_timeout(inputs)
	if (locale === "ru") return ru_admin_kelvin_timeout(inputs)
	if (locale === "sv") return sv_admin_kelvin_timeout(inputs)
	if (locale === "tr") return tr_admin_kelvin_timeout(inputs)
	if (locale === "zh") return zh_admin_kelvin_timeout(inputs)
	if (locale === "ja") return ja_admin_kelvin_timeout(inputs)
	return en_admin_kelvin_timeout(inputs)
});

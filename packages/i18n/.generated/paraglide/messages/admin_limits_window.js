/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_WindowInputs */

const en_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per (seconds)`)
};

const es_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada (segundos)`)
};

const de_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pro (Sekunden)`)
};

const fr_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par (secondes)`)
};

const it_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni (secondi)`)
};

const nl_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per (seconden)`)
};

const pl_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na (sekundy)`)
};

const pt_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A cada (segundos)`)
};

const ru_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За (секунд)`)
};

const sv_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per (sekunder)`)
};

const tr_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Süre (saniye)`)
};

const zh_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时间窗口（秒）`)
};

const ja_admin_limits_window = /** @type {(inputs: Admin_Limits_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`間隔（秒）`)
};

/**
* | output |
* | --- |
* | "Per (seconds)" |
*
* @param {Admin_Limits_WindowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_window = /** @type {((inputs?: Admin_Limits_WindowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_WindowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_window(inputs)
	if (locale === "de") return de_admin_limits_window(inputs)
	if (locale === "fr") return fr_admin_limits_window(inputs)
	if (locale === "it") return it_admin_limits_window(inputs)
	if (locale === "nl") return nl_admin_limits_window(inputs)
	if (locale === "pl") return pl_admin_limits_window(inputs)
	if (locale === "pt") return pt_admin_limits_window(inputs)
	if (locale === "ru") return ru_admin_limits_window(inputs)
	if (locale === "sv") return sv_admin_limits_window(inputs)
	if (locale === "tr") return tr_admin_limits_window(inputs)
	if (locale === "zh") return zh_admin_limits_window(inputs)
	if (locale === "ja") return ja_admin_limits_window(inputs)
	return en_admin_limits_window(inputs)
});

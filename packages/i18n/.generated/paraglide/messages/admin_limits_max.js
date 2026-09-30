/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_MaxInputs */

const en_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requests`)
};

const es_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peticiones`)
};

const de_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfragen`)
};

const fr_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requêtes`)
};

const it_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richieste`)
};

const nl_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoeken`)
};

const pl_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żądania`)
};

const pt_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requisições`)
};

const ru_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросов`)
};

const sv_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anrop`)
};

const tr_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek`)
};

const zh_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求数`)
};

const ja_admin_limits_max = /** @type {(inputs: Admin_Limits_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエスト数`)
};

/**
* | output |
* | --- |
* | "Requests" |
*
* @param {Admin_Limits_MaxInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_max = /** @type {((inputs?: Admin_Limits_MaxInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_MaxInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_max(inputs)
	if (locale === "de") return de_admin_limits_max(inputs)
	if (locale === "fr") return fr_admin_limits_max(inputs)
	if (locale === "it") return it_admin_limits_max(inputs)
	if (locale === "nl") return nl_admin_limits_max(inputs)
	if (locale === "pl") return pl_admin_limits_max(inputs)
	if (locale === "pt") return pt_admin_limits_max(inputs)
	if (locale === "ru") return ru_admin_limits_max(inputs)
	if (locale === "sv") return sv_admin_limits_max(inputs)
	if (locale === "tr") return tr_admin_limits_max(inputs)
	if (locale === "zh") return zh_admin_limits_max(inputs)
	if (locale === "ja") return ja_admin_limits_max(inputs)
	return en_admin_limits_max(inputs)
});

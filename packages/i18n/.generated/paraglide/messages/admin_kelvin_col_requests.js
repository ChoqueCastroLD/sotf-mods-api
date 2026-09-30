/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Col_RequestsInputs */

const en_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requests`)
};

const es_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peticiones`)
};

const de_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfragen`)
};

const fr_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requêtes`)
};

const it_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richieste`)
};

const nl_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoeken`)
};

const pl_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żądania`)
};

const pt_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requisições`)
};

const ru_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросы`)
};

const sv_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anrop`)
};

const tr_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstekler`)
};

const zh_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求`)
};

const ja_admin_kelvin_col_requests = /** @type {(inputs: Admin_Kelvin_Col_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエスト`)
};

/**
* | output |
* | --- |
* | "Requests" |
*
* @param {Admin_Kelvin_Col_RequestsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_col_requests = /** @type {((inputs?: Admin_Kelvin_Col_RequestsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Col_RequestsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_col_requests(inputs)
	if (locale === "de") return de_admin_kelvin_col_requests(inputs)
	if (locale === "fr") return fr_admin_kelvin_col_requests(inputs)
	if (locale === "it") return it_admin_kelvin_col_requests(inputs)
	if (locale === "nl") return nl_admin_kelvin_col_requests(inputs)
	if (locale === "pl") return pl_admin_kelvin_col_requests(inputs)
	if (locale === "pt") return pt_admin_kelvin_col_requests(inputs)
	if (locale === "ru") return ru_admin_kelvin_col_requests(inputs)
	if (locale === "sv") return sv_admin_kelvin_col_requests(inputs)
	if (locale === "tr") return tr_admin_kelvin_col_requests(inputs)
	if (locale === "zh") return zh_admin_kelvin_col_requests(inputs)
	if (locale === "ja") return ja_admin_kelvin_col_requests(inputs)
	return en_admin_kelvin_col_requests(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_Error_NumberInputs */

const en_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requests and seconds must be whole numbers above 0.`)
};

const es_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las peticiones y los segundos deben ser números enteros mayores que 0.`)
};

const de_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfragen und Sekunden müssen ganze Zahlen über 0 sein.`)
};

const fr_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les requêtes et les secondes doivent être des entiers supérieurs à 0.`)
};

const it_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richieste e secondi devono essere numeri interi maggiori di 0.`)
};

const nl_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoeken en seconden moeten gehele getallen boven 0 zijn.`)
};

const pl_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żądania i sekundy muszą być liczbami całkowitymi większymi od 0.`)
};

const pt_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requisições e segundos devem ser números inteiros maiores que 0.`)
};

const ru_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Число запросов и секунд должно быть целым и больше 0.`)
};

const sv_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anrop och sekunder måste vara heltal över 0.`)
};

const tr_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek ve saniye, 0’dan büyük tam sayılar olmalı.`)
};

const zh_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求数和秒数必须是大于 0 的整数。`)
};

const ja_admin_limits_error_number = /** @type {(inputs: Admin_Limits_Error_NumberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエスト数と秒数は 0 より大きい整数にしてください。`)
};

/**
* | output |
* | --- |
* | "Requests and seconds must be whole numbers above 0." |
*
* @param {Admin_Limits_Error_NumberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_error_number = /** @type {((inputs?: Admin_Limits_Error_NumberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_Error_NumberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_error_number(inputs)
	if (locale === "de") return de_admin_limits_error_number(inputs)
	if (locale === "fr") return fr_admin_limits_error_number(inputs)
	if (locale === "it") return it_admin_limits_error_number(inputs)
	if (locale === "nl") return nl_admin_limits_error_number(inputs)
	if (locale === "pl") return pl_admin_limits_error_number(inputs)
	if (locale === "pt") return pt_admin_limits_error_number(inputs)
	if (locale === "ru") return ru_admin_limits_error_number(inputs)
	if (locale === "sv") return sv_admin_limits_error_number(inputs)
	if (locale === "tr") return tr_admin_limits_error_number(inputs)
	if (locale === "zh") return zh_admin_limits_error_number(inputs)
	if (locale === "ja") return ja_admin_limits_error_number(inputs)
	return en_admin_limits_error_number(inputs)
});

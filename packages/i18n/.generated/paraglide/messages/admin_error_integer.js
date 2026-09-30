/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Error_IntegerInputs */

const en_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a whole number.`)
};

const es_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introduce un número entero.`)
};

const de_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib eine ganze Zahl ein.`)
};

const fr_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez un nombre entier.`)
};

const it_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci un numero intero.`)
};

const nl_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul een geheel getal in.`)
};

const pl_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj liczbę całkowitą.`)
};

const pt_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe um número inteiro.`)
};

const ru_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите целое число.`)
};

const sv_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange ett heltal.`)
};

const tr_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir tam sayı gir.`)
};

const zh_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入整数。`)
};

const ja_admin_error_integer = /** @type {(inputs: Admin_Error_IntegerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整数を入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter a whole number." |
*
* @param {Admin_Error_IntegerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_error_integer = /** @type {((inputs?: Admin_Error_IntegerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_IntegerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_error_integer(inputs)
	if (locale === "de") return de_admin_error_integer(inputs)
	if (locale === "fr") return fr_admin_error_integer(inputs)
	if (locale === "it") return it_admin_error_integer(inputs)
	if (locale === "nl") return nl_admin_error_integer(inputs)
	if (locale === "pl") return pl_admin_error_integer(inputs)
	if (locale === "pt") return pt_admin_error_integer(inputs)
	if (locale === "ru") return ru_admin_error_integer(inputs)
	if (locale === "sv") return sv_admin_error_integer(inputs)
	if (locale === "tr") return tr_admin_error_integer(inputs)
	if (locale === "zh") return zh_admin_error_integer(inputs)
	if (locale === "ja") return ja_admin_error_integer(inputs)
	return en_admin_error_integer(inputs)
});

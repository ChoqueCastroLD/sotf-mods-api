/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Error_DateInputs */

const en_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid date.`)
};

const es_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introduce una fecha válida.`)
};

const de_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib ein gültiges Datum ein.`)
};

const fr_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez une date valide.`)
};

const it_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci una data valida.`)
};

const nl_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul een geldige datum in.`)
};

const pl_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj prawidłową datę.`)
};

const pt_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe uma data válida.`)
};

const ru_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите правильную дату.`)
};

const sv_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange ett giltigt datum.`)
};

const tr_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçerli bir tarih gir.`)
};

const zh_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入有效日期。`)
};

const ja_admin_error_date = /** @type {(inputs: Admin_Error_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正しい日付を入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter a valid date." |
*
* @param {Admin_Error_DateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_error_date = /** @type {((inputs?: Admin_Error_DateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_DateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_error_date(inputs)
	if (locale === "de") return de_admin_error_date(inputs)
	if (locale === "fr") return fr_admin_error_date(inputs)
	if (locale === "it") return it_admin_error_date(inputs)
	if (locale === "nl") return nl_admin_error_date(inputs)
	if (locale === "pl") return pl_admin_error_date(inputs)
	if (locale === "pt") return pt_admin_error_date(inputs)
	if (locale === "ru") return ru_admin_error_date(inputs)
	if (locale === "sv") return sv_admin_error_date(inputs)
	if (locale === "tr") return tr_admin_error_date(inputs)
	if (locale === "zh") return zh_admin_error_date(inputs)
	if (locale === "ja") return ja_admin_error_date(inputs)
	return en_admin_error_date(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Error_PeriodInputs */

const en_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The end must be after the start.`)
};

const es_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El final debe ser posterior al inicio.`)
};

const de_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Ende muss nach dem Beginn liegen.`)
};

const fr_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fin doit être après le début.`)
};

const it_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fine deve essere successiva all’inizio.`)
};

const nl_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het einde moet na het begin liggen.`)
};

const pl_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koniec musi być po początku.`)
};

const pt_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O fim deve ser depois do início.`)
};

const ru_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конец должен быть позже начала.`)
};

const sv_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slutet måste vara efter början.`)
};

const tr_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitiş, başlangıçtan sonra olmalı.`)
};

const zh_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结束时间必须晚于开始时间。`)
};

const ja_admin_error_period = /** @type {(inputs: Admin_Error_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了は開始より後にしてください。`)
};

/**
* | output |
* | --- |
* | "The end must be after the start." |
*
* @param {Admin_Error_PeriodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_error_period = /** @type {((inputs?: Admin_Error_PeriodInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_PeriodInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_error_period(inputs)
	if (locale === "de") return de_admin_error_period(inputs)
	if (locale === "fr") return fr_admin_error_period(inputs)
	if (locale === "it") return it_admin_error_period(inputs)
	if (locale === "nl") return nl_admin_error_period(inputs)
	if (locale === "pl") return pl_admin_error_period(inputs)
	if (locale === "pt") return pt_admin_error_period(inputs)
	if (locale === "ru") return ru_admin_error_period(inputs)
	if (locale === "sv") return sv_admin_error_period(inputs)
	if (locale === "tr") return tr_admin_error_period(inputs)
	if (locale === "zh") return zh_admin_error_period(inputs)
	if (locale === "ja") return ja_admin_error_period(inputs)
	return en_admin_error_period(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Error_RequiredInputs */

const en_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Required.`)
};

const es_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obligatorio.`)
};

const de_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pflichtfeld.`)
};

const fr_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obligatoire.`)
};

const it_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obbligatorio.`)
};

const nl_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verplicht.`)
};

const pl_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pole wymagane.`)
};

const pt_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrigatório.`)
};

const ru_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обязательное поле.`)
};

const sv_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obligatoriskt.`)
};

const tr_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zorunlu.`)
};

const zh_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必填。`)
};

const ja_admin_error_required = /** @type {(inputs: Admin_Error_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必須です。`)
};

/**
* | output |
* | --- |
* | "Required." |
*
* @param {Admin_Error_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_error_required = /** @type {((inputs?: Admin_Error_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_error_required(inputs)
	if (locale === "de") return de_admin_error_required(inputs)
	if (locale === "fr") return fr_admin_error_required(inputs)
	if (locale === "it") return it_admin_error_required(inputs)
	if (locale === "nl") return nl_admin_error_required(inputs)
	if (locale === "pl") return pl_admin_error_required(inputs)
	if (locale === "pt") return pt_admin_error_required(inputs)
	if (locale === "ru") return ru_admin_error_required(inputs)
	if (locale === "sv") return sv_admin_error_required(inputs)
	if (locale === "tr") return tr_admin_error_required(inputs)
	if (locale === "zh") return zh_admin_error_required(inputs)
	if (locale === "ja") return ja_admin_error_required(inputs)
	return en_admin_error_required(inputs)
});

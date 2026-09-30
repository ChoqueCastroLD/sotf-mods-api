/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Error_DuplicateInputs */

const en_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already in the list.`)
};

const es_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya está en la lista.`)
};

const de_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steht schon in der Liste.`)
};

const fr_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déjà dans la liste.`)
};

const it_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È già nell’elenco.`)
};

const nl_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staat al in de lijst.`)
};

const pl_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Już jest na liście.`)
};

const pt_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já está na lista.`)
};

const ru_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уже есть в списке.`)
};

const sv_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finns redan i listan.`)
};

const tr_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaten listede.`)
};

const zh_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已在列表中。`)
};

const ja_admin_error_duplicate = /** @type {(inputs: Admin_Error_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すでにリストにあります。`)
};

/**
* | output |
* | --- |
* | "Already in the list." |
*
* @param {Admin_Error_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_error_duplicate = /** @type {((inputs?: Admin_Error_DuplicateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_DuplicateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_error_duplicate(inputs)
	if (locale === "de") return de_admin_error_duplicate(inputs)
	if (locale === "fr") return fr_admin_error_duplicate(inputs)
	if (locale === "it") return it_admin_error_duplicate(inputs)
	if (locale === "nl") return nl_admin_error_duplicate(inputs)
	if (locale === "pl") return pl_admin_error_duplicate(inputs)
	if (locale === "pt") return pt_admin_error_duplicate(inputs)
	if (locale === "ru") return ru_admin_error_duplicate(inputs)
	if (locale === "sv") return sv_admin_error_duplicate(inputs)
	if (locale === "tr") return tr_admin_error_duplicate(inputs)
	if (locale === "zh") return zh_admin_error_duplicate(inputs)
	if (locale === "ja") return ja_admin_error_duplicate(inputs)
	return en_admin_error_duplicate(inputs)
});

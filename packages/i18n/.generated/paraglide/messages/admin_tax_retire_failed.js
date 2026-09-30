/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Retire_FailedInputs */

const en_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t retire the category`)
};

const es_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo retirar la categoría`)
};

const de_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie konnte nicht stillgelegt werden`)
};

const fr_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de retirer la catégorie`)
};

const it_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile ritirare la categoria`)
};

const nl_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de categorie niet intrekken`)
};

const pl_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wycofać kategorii`)
};

const pt_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível aposentar a categoria`)
};

const ru_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось вывести категорию`)
};

const sv_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte pensionera kategorin`)
};

const tr_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori emekliye ayrılamadı`)
};

const zh_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法停用分类`)
};

const ja_admin_tax_retire_failed = /** @type {(inputs: Admin_Tax_Retire_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーを引退させられませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t retire the category" |
*
* @param {Admin_Tax_Retire_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_retire_failed = /** @type {((inputs?: Admin_Tax_Retire_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Retire_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_retire_failed(inputs)
	if (locale === "de") return de_admin_tax_retire_failed(inputs)
	if (locale === "fr") return fr_admin_tax_retire_failed(inputs)
	if (locale === "it") return it_admin_tax_retire_failed(inputs)
	if (locale === "nl") return nl_admin_tax_retire_failed(inputs)
	if (locale === "pl") return pl_admin_tax_retire_failed(inputs)
	if (locale === "pt") return pt_admin_tax_retire_failed(inputs)
	if (locale === "ru") return ru_admin_tax_retire_failed(inputs)
	if (locale === "sv") return sv_admin_tax_retire_failed(inputs)
	if (locale === "tr") return tr_admin_tax_retire_failed(inputs)
	if (locale === "zh") return zh_admin_tax_retire_failed(inputs)
	if (locale === "ja") return ja_admin_tax_retire_failed(inputs)
	return en_admin_tax_retire_failed(inputs)
});

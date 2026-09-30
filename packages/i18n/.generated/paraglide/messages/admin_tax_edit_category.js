/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Tax_Edit_CategoryInputs */

const en_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edit ${i?.name}`)
};

const es_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar ${i?.name}`)
};

const de_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bearbeiten`)
};

const fr_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifier ${i?.name}`)
};

const it_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifica ${i?.name}`)
};

const nl_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bewerken`)
};

const pl_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edytuj ${i?.name}`)
};

const pt_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar ${i?.name}`)
};

const ru_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменить ${i?.name}`)
};

const sv_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Redigera ${i?.name}`)
};

const tr_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} düzenle`)
};

const zh_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑 ${i?.name}`)
};

const ja_admin_tax_edit_category = /** @type {(inputs: Admin_Tax_Edit_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を編集`)
};

/**
* | output |
* | --- |
* | "Edit {name}" |
*
* @param {Admin_Tax_Edit_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_edit_category = /** @type {((inputs: Admin_Tax_Edit_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Edit_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_edit_category(inputs)
	if (locale === "de") return de_admin_tax_edit_category(inputs)
	if (locale === "fr") return fr_admin_tax_edit_category(inputs)
	if (locale === "it") return it_admin_tax_edit_category(inputs)
	if (locale === "nl") return nl_admin_tax_edit_category(inputs)
	if (locale === "pl") return pl_admin_tax_edit_category(inputs)
	if (locale === "pt") return pt_admin_tax_edit_category(inputs)
	if (locale === "ru") return ru_admin_tax_edit_category(inputs)
	if (locale === "sv") return sv_admin_tax_edit_category(inputs)
	if (locale === "tr") return tr_admin_tax_edit_category(inputs)
	if (locale === "zh") return zh_admin_tax_edit_category(inputs)
	if (locale === "ja") return ja_admin_tax_edit_category(inputs)
	return en_admin_tax_edit_category(inputs)
});

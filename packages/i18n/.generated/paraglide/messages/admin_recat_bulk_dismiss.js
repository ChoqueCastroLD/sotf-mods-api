/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Bulk_DismissInputs */

const en_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop from list`)
};

const es_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar de la lista`)
};

const de_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus der Liste nehmen`)
};

const fr_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer de la liste`)
};

const it_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Togli dall’elenco`)
};

const nl_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit de lijst halen`)
};

const pl_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń z listy`)
};

const pt_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tirar da lista`)
};

const ru_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать из списка`)
};

const sv_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort från listan`)
};

const tr_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listeden çıkar`)
};

const zh_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从列表移除`)
};

const ja_admin_recat_bulk_dismiss = /** @type {(inputs: Admin_Recat_Bulk_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リストから外す`)
};

/**
* | output |
* | --- |
* | "Drop from list" |
*
* @param {Admin_Recat_Bulk_DismissInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_bulk_dismiss = /** @type {((inputs?: Admin_Recat_Bulk_DismissInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_DismissInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_bulk_dismiss(inputs)
	if (locale === "de") return de_admin_recat_bulk_dismiss(inputs)
	if (locale === "fr") return fr_admin_recat_bulk_dismiss(inputs)
	if (locale === "it") return it_admin_recat_bulk_dismiss(inputs)
	if (locale === "nl") return nl_admin_recat_bulk_dismiss(inputs)
	if (locale === "pl") return pl_admin_recat_bulk_dismiss(inputs)
	if (locale === "pt") return pt_admin_recat_bulk_dismiss(inputs)
	if (locale === "ru") return ru_admin_recat_bulk_dismiss(inputs)
	if (locale === "sv") return sv_admin_recat_bulk_dismiss(inputs)
	if (locale === "tr") return tr_admin_recat_bulk_dismiss(inputs)
	if (locale === "zh") return zh_admin_recat_bulk_dismiss(inputs)
	if (locale === "ja") return ja_admin_recat_bulk_dismiss(inputs)
	return en_admin_recat_bulk_dismiss(inputs)
});

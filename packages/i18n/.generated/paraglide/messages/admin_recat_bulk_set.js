/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Bulk_SetInputs */

const en_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set`)
};

const es_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asignar`)
};

const de_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setzen`)
};

const fr_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appliquer`)
};

const it_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imposta`)
};

const nl_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instellen`)
};

const pl_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustaw`)
};

const pt_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Definir`)
};

const ru_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назначить`)
};

const sv_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sätt`)
};

const tr_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ata`)
};

const zh_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置`)
};

const ja_admin_recat_bulk_set = /** @type {(inputs: Admin_Recat_Bulk_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

/**
* | output |
* | --- |
* | "Set" |
*
* @param {Admin_Recat_Bulk_SetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_bulk_set = /** @type {((inputs?: Admin_Recat_Bulk_SetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_SetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_bulk_set(inputs)
	if (locale === "de") return de_admin_recat_bulk_set(inputs)
	if (locale === "fr") return fr_admin_recat_bulk_set(inputs)
	if (locale === "it") return it_admin_recat_bulk_set(inputs)
	if (locale === "nl") return nl_admin_recat_bulk_set(inputs)
	if (locale === "pl") return pl_admin_recat_bulk_set(inputs)
	if (locale === "pt") return pt_admin_recat_bulk_set(inputs)
	if (locale === "ru") return ru_admin_recat_bulk_set(inputs)
	if (locale === "sv") return sv_admin_recat_bulk_set(inputs)
	if (locale === "tr") return tr_admin_recat_bulk_set(inputs)
	if (locale === "zh") return zh_admin_recat_bulk_set(inputs)
	if (locale === "ja") return ja_admin_recat_bulk_set(inputs)
	return en_admin_recat_bulk_set(inputs)
});

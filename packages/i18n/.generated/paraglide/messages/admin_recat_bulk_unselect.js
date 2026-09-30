/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Bulk_UnselectInputs */

const en_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unselect`)
};

const es_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deseleccionar`)
};

const de_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auswahl aufheben`)
};

const fr_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désélectionner`)
};

const it_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deseleziona`)
};

const nl_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selectie opheffen`)
};

const pl_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznacz`)
};

const pt_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desmarcar`)
};

const ru_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять выбор`)
};

const sv_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avmarkera`)
};

const tr_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçimi kaldır`)
};

const zh_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消选择`)
};

const ja_admin_recat_bulk_unselect = /** @type {(inputs: Admin_Recat_Bulk_UnselectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択解除`)
};

/**
* | output |
* | --- |
* | "Unselect" |
*
* @param {Admin_Recat_Bulk_UnselectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_bulk_unselect = /** @type {((inputs?: Admin_Recat_Bulk_UnselectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_UnselectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_bulk_unselect(inputs)
	if (locale === "de") return de_admin_recat_bulk_unselect(inputs)
	if (locale === "fr") return fr_admin_recat_bulk_unselect(inputs)
	if (locale === "it") return it_admin_recat_bulk_unselect(inputs)
	if (locale === "nl") return nl_admin_recat_bulk_unselect(inputs)
	if (locale === "pl") return pl_admin_recat_bulk_unselect(inputs)
	if (locale === "pt") return pt_admin_recat_bulk_unselect(inputs)
	if (locale === "ru") return ru_admin_recat_bulk_unselect(inputs)
	if (locale === "sv") return sv_admin_recat_bulk_unselect(inputs)
	if (locale === "tr") return tr_admin_recat_bulk_unselect(inputs)
	if (locale === "zh") return zh_admin_recat_bulk_unselect(inputs)
	if (locale === "ja") return ja_admin_recat_bulk_unselect(inputs)
	return en_admin_recat_bulk_unselect(inputs)
});

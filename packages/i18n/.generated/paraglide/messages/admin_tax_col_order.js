/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Col_OrderInputs */

const en_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Order`)
};

const es_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orden`)
};

const de_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reihenfolge`)
};

const fr_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordre`)
};

const it_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordine`)
};

const nl_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgorde`)
};

const pl_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejność`)
};

const pt_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordem`)
};

const ru_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Порядок`)
};

const sv_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordning`)
};

const tr_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıra`)
};

const zh_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序`)
};

const ja_admin_tax_col_order = /** @type {(inputs: Admin_Tax_Col_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並び順`)
};

/**
* | output |
* | --- |
* | "Order" |
*
* @param {Admin_Tax_Col_OrderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_col_order = /** @type {((inputs?: Admin_Tax_Col_OrderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Col_OrderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_col_order(inputs)
	if (locale === "de") return de_admin_tax_col_order(inputs)
	if (locale === "fr") return fr_admin_tax_col_order(inputs)
	if (locale === "it") return it_admin_tax_col_order(inputs)
	if (locale === "nl") return nl_admin_tax_col_order(inputs)
	if (locale === "pl") return pl_admin_tax_col_order(inputs)
	if (locale === "pt") return pt_admin_tax_col_order(inputs)
	if (locale === "ru") return ru_admin_tax_col_order(inputs)
	if (locale === "sv") return sv_admin_tax_col_order(inputs)
	if (locale === "tr") return tr_admin_tax_col_order(inputs)
	if (locale === "zh") return zh_admin_tax_col_order(inputs)
	if (locale === "ja") return ja_admin_tax_col_order(inputs)
	return en_admin_tax_col_order(inputs)
});

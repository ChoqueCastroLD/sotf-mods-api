/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Sort_OrderInputs */

const en_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display order`)
};

const es_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orden de aparición`)
};

const de_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigereihenfolge`)
};

const fr_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordre d'affichage`)
};

const it_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordine di visualizzazione`)
};

const nl_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergavevolgorde`)
};

const pl_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejność wyświetlania`)
};

const pt_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordem de exibição`)
};

const ru_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Порядок показа`)
};

const sv_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visningsordning`)
};

const tr_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görüntüleme sırası`)
};

const zh_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示顺序`)
};

const ja_admin_tax_sort_order = /** @type {(inputs: Admin_Tax_Sort_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示順`)
};

/**
* | output |
* | --- |
* | "Display order" |
*
* @param {Admin_Tax_Sort_OrderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_sort_order = /** @type {((inputs?: Admin_Tax_Sort_OrderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Sort_OrderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_sort_order(inputs)
	if (locale === "de") return de_admin_tax_sort_order(inputs)
	if (locale === "fr") return fr_admin_tax_sort_order(inputs)
	if (locale === "it") return it_admin_tax_sort_order(inputs)
	if (locale === "nl") return nl_admin_tax_sort_order(inputs)
	if (locale === "pl") return pl_admin_tax_sort_order(inputs)
	if (locale === "pt") return pt_admin_tax_sort_order(inputs)
	if (locale === "ru") return ru_admin_tax_sort_order(inputs)
	if (locale === "sv") return sv_admin_tax_sort_order(inputs)
	if (locale === "tr") return tr_admin_tax_sort_order(inputs)
	if (locale === "zh") return zh_admin_tax_sort_order(inputs)
	if (locale === "ja") return ja_admin_tax_sort_order(inputs)
	return en_admin_tax_sort_order(inputs)
});

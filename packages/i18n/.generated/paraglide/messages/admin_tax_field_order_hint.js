/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_Order_HintInputs */

const en_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lower numbers come first.`)
};

const es_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los números menores van primero.`)
};

const de_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kleinere Zahlen kommen zuerst.`)
};

const fr_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus petits nombres passent en premier.`)
};

const it_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I numeri più bassi vengono prima.`)
};

const nl_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lagere getallen komen eerst.`)
};

const pl_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mniejsze liczby są pierwsze.`)
};

const pt_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Números menores vêm primeiro.`)
};

const ru_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Меньшие числа идут первыми.`)
};

const sv_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägre tal kommer först.`)
};

const tr_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küçük sayılar önce gelir.`)
};

const zh_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数字越小越靠前。`)
};

const ja_admin_tax_field_order_hint = /** @type {(inputs: Admin_Tax_Field_Order_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小さい数字ほど先に表示されます。`)
};

/**
* | output |
* | --- |
* | "Lower numbers come first." |
*
* @param {Admin_Tax_Field_Order_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_order_hint = /** @type {((inputs?: Admin_Tax_Field_Order_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Order_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_order_hint(inputs)
	if (locale === "de") return de_admin_tax_field_order_hint(inputs)
	if (locale === "fr") return fr_admin_tax_field_order_hint(inputs)
	if (locale === "it") return it_admin_tax_field_order_hint(inputs)
	if (locale === "nl") return nl_admin_tax_field_order_hint(inputs)
	if (locale === "pl") return pl_admin_tax_field_order_hint(inputs)
	if (locale === "pt") return pt_admin_tax_field_order_hint(inputs)
	if (locale === "ru") return ru_admin_tax_field_order_hint(inputs)
	if (locale === "sv") return sv_admin_tax_field_order_hint(inputs)
	if (locale === "tr") return tr_admin_tax_field_order_hint(inputs)
	if (locale === "zh") return zh_admin_tax_field_order_hint(inputs)
	if (locale === "ja") return ja_admin_tax_field_order_hint(inputs)
	return en_admin_tax_field_order_hint(inputs)
});

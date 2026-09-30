/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Tax_RetiredInputs */

const en_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} retired`)
};

const es_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} retirada`)
};

const de_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} stillgelegt`)
};

const fr_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} retirée`)
};

const it_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ritirata`)
};

const nl_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ingetrokken`)
};

const pl_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wycofano ${i?.name}`)
};

const pt_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aposentada`)
};

const ru_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} выведена`)
};

const sv_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} pensionerad`)
};

const tr_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} emekliye ayrıldı`)
};

const zh_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已停用`)
};

const ja_admin_tax_retired = /** @type {(inputs: Admin_Tax_RetiredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を引退させました`)
};

/**
* | output |
* | --- |
* | "{name} retired" |
*
* @param {Admin_Tax_RetiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_retired = /** @type {((inputs: Admin_Tax_RetiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_RetiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_retired(inputs)
	if (locale === "de") return de_admin_tax_retired(inputs)
	if (locale === "fr") return fr_admin_tax_retired(inputs)
	if (locale === "it") return it_admin_tax_retired(inputs)
	if (locale === "nl") return nl_admin_tax_retired(inputs)
	if (locale === "pl") return pl_admin_tax_retired(inputs)
	if (locale === "pt") return pt_admin_tax_retired(inputs)
	if (locale === "ru") return ru_admin_tax_retired(inputs)
	if (locale === "sv") return sv_admin_tax_retired(inputs)
	if (locale === "tr") return tr_admin_tax_retired(inputs)
	if (locale === "zh") return zh_admin_tax_retired(inputs)
	if (locale === "ja") return ja_admin_tax_retired(inputs)
	return en_admin_tax_retired(inputs)
});

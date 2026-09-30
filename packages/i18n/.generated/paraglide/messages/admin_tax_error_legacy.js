/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Admin_Tax_Error_LegacyInputs */

const en_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up to ${i?.max} legacy slugs.`)
};

const es_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hasta ${i?.max} slugs antiguos.`)
};

const de_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Höchstens ${i?.max} alte Slugs.`)
};

const fr_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} anciens slugs au maximum.`)
};

const it_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Al massimo ${i?.max} vecchi slug.`)
};

const nl_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximaal ${i?.max} oude slugs.`)
};

const pl_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Najwyżej ${i?.max} starych slugów.`)
};

const pt_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Até ${i?.max} slugs antigos.`)
};

const ru_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не больше ${i?.max} старых слагов.`)
};

const sv_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Högst ${i?.max} gamla sluggar.`)
};

const tr_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En fazla ${i?.max} eski slug.`)
};

const zh_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最多 ${i?.max} 个旧 slug。`)
};

const ja_admin_tax_error_legacy = /** @type {(inputs: Admin_Tax_Error_LegacyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`旧スラッグは ${i?.max} 個まで。`)
};

/**
* | output |
* | --- |
* | "Up to {max} legacy slugs." |
*
* @param {Admin_Tax_Error_LegacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_error_legacy = /** @type {((inputs: Admin_Tax_Error_LegacyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Error_LegacyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_error_legacy(inputs)
	if (locale === "de") return de_admin_tax_error_legacy(inputs)
	if (locale === "fr") return fr_admin_tax_error_legacy(inputs)
	if (locale === "it") return it_admin_tax_error_legacy(inputs)
	if (locale === "nl") return nl_admin_tax_error_legacy(inputs)
	if (locale === "pl") return pl_admin_tax_error_legacy(inputs)
	if (locale === "pt") return pt_admin_tax_error_legacy(inputs)
	if (locale === "ru") return ru_admin_tax_error_legacy(inputs)
	if (locale === "sv") return sv_admin_tax_error_legacy(inputs)
	if (locale === "tr") return tr_admin_tax_error_legacy(inputs)
	if (locale === "zh") return zh_admin_tax_error_legacy(inputs)
	if (locale === "ja") return ja_admin_tax_error_legacy(inputs)
	return en_admin_tax_error_legacy(inputs)
});

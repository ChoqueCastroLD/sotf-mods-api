/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Col_LegacyInputs */

const en_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legacy slugs`)
};

const es_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slugs antiguos`)
};

const de_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alte Slugs`)
};

const fr_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anciens slugs`)
};

const it_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vecchi slug`)
};

const nl_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oude slugs`)
};

const pl_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stare slugi`)
};

const pt_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slugs antigos`)
};

const ru_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Старые слаги`)
};

const sv_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gamla sluggar`)
};

const tr_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eski slug’lar`)
};

const zh_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧 slug`)
};

const ja_admin_tax_col_legacy = /** @type {(inputs: Admin_Tax_Col_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧スラッグ`)
};

/**
* | output |
* | --- |
* | "Legacy slugs" |
*
* @param {Admin_Tax_Col_LegacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_col_legacy = /** @type {((inputs?: Admin_Tax_Col_LegacyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Col_LegacyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_col_legacy(inputs)
	if (locale === "de") return de_admin_tax_col_legacy(inputs)
	if (locale === "fr") return fr_admin_tax_col_legacy(inputs)
	if (locale === "it") return it_admin_tax_col_legacy(inputs)
	if (locale === "nl") return nl_admin_tax_col_legacy(inputs)
	if (locale === "pl") return pl_admin_tax_col_legacy(inputs)
	if (locale === "pt") return pt_admin_tax_col_legacy(inputs)
	if (locale === "ru") return ru_admin_tax_col_legacy(inputs)
	if (locale === "sv") return sv_admin_tax_col_legacy(inputs)
	if (locale === "tr") return tr_admin_tax_col_legacy(inputs)
	if (locale === "zh") return zh_admin_tax_col_legacy(inputs)
	if (locale === "ja") return ja_admin_tax_col_legacy(inputs)
	return en_admin_tax_col_legacy(inputs)
});

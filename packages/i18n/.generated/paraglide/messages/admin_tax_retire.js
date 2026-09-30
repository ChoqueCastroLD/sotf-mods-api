/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_RetireInputs */

const en_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retire`)
};

const es_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar`)
};

const de_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stilllegen`)
};

const fr_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer`)
};

const it_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritira`)
};

const nl_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intrekken`)
};

const pl_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofaj`)
};

const pt_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aposentar`)
};

const ru_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вывести`)
};

const sv_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pensionera`)
};

const tr_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Emekliye ayır`)
};

const zh_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`停用`)
};

const ja_admin_tax_retire = /** @type {(inputs: Admin_Tax_RetireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引退させる`)
};

/**
* | output |
* | --- |
* | "Retire" |
*
* @param {Admin_Tax_RetireInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_retire = /** @type {((inputs?: Admin_Tax_RetireInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_RetireInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_retire(inputs)
	if (locale === "de") return de_admin_tax_retire(inputs)
	if (locale === "fr") return fr_admin_tax_retire(inputs)
	if (locale === "it") return it_admin_tax_retire(inputs)
	if (locale === "nl") return nl_admin_tax_retire(inputs)
	if (locale === "pl") return pl_admin_tax_retire(inputs)
	if (locale === "pt") return pt_admin_tax_retire(inputs)
	if (locale === "ru") return ru_admin_tax_retire(inputs)
	if (locale === "sv") return sv_admin_tax_retire(inputs)
	if (locale === "tr") return tr_admin_tax_retire(inputs)
	if (locale === "zh") return zh_admin_tax_retire(inputs)
	if (locale === "ja") return ja_admin_tax_retire(inputs)
	return en_admin_tax_retire(inputs)
});

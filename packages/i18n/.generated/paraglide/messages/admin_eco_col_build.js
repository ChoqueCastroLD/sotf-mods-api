/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Col_BuildInputs */

const en_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const de_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const fr_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const it_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pl_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pt_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const ru_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборка`)
};

const sv_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygge`)
};

const tr_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_admin_eco_col_build = /** @type {(inputs: Admin_Eco_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルド`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Admin_Eco_Col_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_col_build = /** @type {((inputs?: Admin_Eco_Col_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Col_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_col_build(inputs)
	if (locale === "de") return de_admin_eco_col_build(inputs)
	if (locale === "fr") return fr_admin_eco_col_build(inputs)
	if (locale === "it") return it_admin_eco_col_build(inputs)
	if (locale === "nl") return nl_admin_eco_col_build(inputs)
	if (locale === "pl") return pl_admin_eco_col_build(inputs)
	if (locale === "pt") return pt_admin_eco_col_build(inputs)
	if (locale === "ru") return ru_admin_eco_col_build(inputs)
	if (locale === "sv") return sv_admin_eco_col_build(inputs)
	if (locale === "tr") return tr_admin_eco_col_build(inputs)
	if (locale === "zh") return zh_admin_eco_col_build(inputs)
	if (locale === "ja") return ja_admin_eco_col_build(inputs)
	return en_admin_eco_col_build(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Field_BuildInputs */

const en_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const de_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const fr_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const it_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pl_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pt_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const ru_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Билд`)
};

const sv_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygge`)
};

const tr_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı`)
};

const zh_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_admin_awards_field_build = /** @type {(inputs: Admin_Awards_Field_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築データ`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Admin_Awards_Field_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_field_build = /** @type {((inputs?: Admin_Awards_Field_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Field_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_field_build(inputs)
	if (locale === "de") return de_admin_awards_field_build(inputs)
	if (locale === "fr") return fr_admin_awards_field_build(inputs)
	if (locale === "it") return it_admin_awards_field_build(inputs)
	if (locale === "nl") return nl_admin_awards_field_build(inputs)
	if (locale === "pl") return pl_admin_awards_field_build(inputs)
	if (locale === "pt") return pt_admin_awards_field_build(inputs)
	if (locale === "ru") return ru_admin_awards_field_build(inputs)
	if (locale === "sv") return sv_admin_awards_field_build(inputs)
	if (locale === "tr") return tr_admin_awards_field_build(inputs)
	if (locale === "zh") return zh_admin_awards_field_build(inputs)
	if (locale === "ja") return ja_admin_awards_field_build(inputs)
	return en_admin_awards_field_build(inputs)
});

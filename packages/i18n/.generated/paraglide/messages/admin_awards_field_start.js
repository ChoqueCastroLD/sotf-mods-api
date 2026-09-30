/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Field_StartInputs */

const en_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From`)
};

const es_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desde`)
};

const de_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von`)
};

const fr_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du`)
};

const it_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dal`)
};

const nl_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Van`)
};

const pl_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Od`)
};

const pt_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De`)
};

const ru_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С`)
};

const sv_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Från`)
};

const tr_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlangıç`)
};

const zh_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始`)
};

const ja_admin_awards_field_start = /** @type {(inputs: Admin_Awards_Field_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始`)
};

/**
* | output |
* | --- |
* | "From" |
*
* @param {Admin_Awards_Field_StartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_field_start = /** @type {((inputs?: Admin_Awards_Field_StartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Field_StartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_field_start(inputs)
	if (locale === "de") return de_admin_awards_field_start(inputs)
	if (locale === "fr") return fr_admin_awards_field_start(inputs)
	if (locale === "it") return it_admin_awards_field_start(inputs)
	if (locale === "nl") return nl_admin_awards_field_start(inputs)
	if (locale === "pl") return pl_admin_awards_field_start(inputs)
	if (locale === "pt") return pt_admin_awards_field_start(inputs)
	if (locale === "ru") return ru_admin_awards_field_start(inputs)
	if (locale === "sv") return sv_admin_awards_field_start(inputs)
	if (locale === "tr") return tr_admin_awards_field_start(inputs)
	if (locale === "zh") return zh_admin_awards_field_start(inputs)
	if (locale === "ja") return ja_admin_awards_field_start(inputs)
	return en_admin_awards_field_start(inputs)
});

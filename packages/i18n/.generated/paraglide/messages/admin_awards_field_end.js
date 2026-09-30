/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Field_EndInputs */

const en_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Until`)
};

const es_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasta`)
};

const de_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bis`)
};

const fr_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Au`)
};

const it_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al`)
};

const nl_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tot`)
};

const pl_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do`)
};

const pt_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Até`)
};

const ru_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По`)
};

const sv_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till`)
};

const tr_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitiş`)
};

const zh_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结束`)
};

const ja_admin_awards_field_end = /** @type {(inputs: Admin_Awards_Field_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了`)
};

/**
* | output |
* | --- |
* | "Until" |
*
* @param {Admin_Awards_Field_EndInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_field_end = /** @type {((inputs?: Admin_Awards_Field_EndInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Field_EndInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_field_end(inputs)
	if (locale === "de") return de_admin_awards_field_end(inputs)
	if (locale === "fr") return fr_admin_awards_field_end(inputs)
	if (locale === "it") return it_admin_awards_field_end(inputs)
	if (locale === "nl") return nl_admin_awards_field_end(inputs)
	if (locale === "pl") return pl_admin_awards_field_end(inputs)
	if (locale === "pt") return pt_admin_awards_field_end(inputs)
	if (locale === "ru") return ru_admin_awards_field_end(inputs)
	if (locale === "sv") return sv_admin_awards_field_end(inputs)
	if (locale === "tr") return tr_admin_awards_field_end(inputs)
	if (locale === "zh") return zh_admin_awards_field_end(inputs)
	if (locale === "ja") return ja_admin_awards_field_end(inputs)
	return en_admin_awards_field_end(inputs)
});

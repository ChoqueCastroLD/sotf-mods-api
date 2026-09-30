/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_EndsInputs */

const en_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ends`)
};

const es_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termina`)
};

const de_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ende`)
};

const fr_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fin`)
};

const it_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fine`)
};

const nl_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eindigt`)
};

const pl_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koniec`)
};

const pt_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termina`)
};

const ru_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Окончание`)
};

const sv_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slutar`)
};

const tr_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitiş`)
};

const zh_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结束`)
};

const ja_admin_ann_field_ends = /** @type {(inputs: Admin_Ann_Field_EndsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了`)
};

/**
* | output |
* | --- |
* | "Ends" |
*
* @param {Admin_Ann_Field_EndsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_ends = /** @type {((inputs?: Admin_Ann_Field_EndsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_EndsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_ends(inputs)
	if (locale === "de") return de_admin_ann_field_ends(inputs)
	if (locale === "fr") return fr_admin_ann_field_ends(inputs)
	if (locale === "it") return it_admin_ann_field_ends(inputs)
	if (locale === "nl") return nl_admin_ann_field_ends(inputs)
	if (locale === "pl") return pl_admin_ann_field_ends(inputs)
	if (locale === "pt") return pt_admin_ann_field_ends(inputs)
	if (locale === "ru") return ru_admin_ann_field_ends(inputs)
	if (locale === "sv") return sv_admin_ann_field_ends(inputs)
	if (locale === "tr") return tr_admin_ann_field_ends(inputs)
	if (locale === "zh") return zh_admin_ann_field_ends(inputs)
	if (locale === "ja") return ja_admin_ann_field_ends(inputs)
	return en_admin_ann_field_ends(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_HrefInputs */

const en_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const es_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace`)
};

const de_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const fr_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien`)
};

const it_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const nl_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const pl_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const pt_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const ru_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка`)
};

const sv_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk`)
};

const tr_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı`)
};

const zh_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接`)
};

const ja_admin_ann_field_href = /** @type {(inputs: Admin_Ann_Field_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンク`)
};

/**
* | output |
* | --- |
* | "Link" |
*
* @param {Admin_Ann_Field_HrefInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_href = /** @type {((inputs?: Admin_Ann_Field_HrefInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_HrefInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_href(inputs)
	if (locale === "de") return de_admin_ann_field_href(inputs)
	if (locale === "fr") return fr_admin_ann_field_href(inputs)
	if (locale === "it") return it_admin_ann_field_href(inputs)
	if (locale === "nl") return nl_admin_ann_field_href(inputs)
	if (locale === "pl") return pl_admin_ann_field_href(inputs)
	if (locale === "pt") return pt_admin_ann_field_href(inputs)
	if (locale === "ru") return ru_admin_ann_field_href(inputs)
	if (locale === "sv") return sv_admin_ann_field_href(inputs)
	if (locale === "tr") return tr_admin_ann_field_href(inputs)
	if (locale === "zh") return zh_admin_ann_field_href(inputs)
	if (locale === "ja") return ja_admin_ann_field_href(inputs)
	return en_admin_ann_field_href(inputs)
});

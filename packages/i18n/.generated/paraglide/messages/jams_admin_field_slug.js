/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Field_SlugInputs */

const en_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Address (slug)`)
};

const es_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dirección (slug)`)
};

const de_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse (Slug)`)
};

const fr_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse (slug)`)
};

const it_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzo (slug)`)
};

const nl_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres (slug)`)
};

const pl_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres (slug)`)
};

const pt_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereço (slug)`)
};

const ru_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес (slug)`)
};

const sv_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adress (slug)`)
};

const tr_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres (slug)`)
};

const zh_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地址（slug）`)
};

const ja_jams_admin_field_slug = /** @type {(inputs: Jams_Admin_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレス（スラッグ）`)
};

/**
* | output |
* | --- |
* | "Address (slug)" |
*
* @param {Jams_Admin_Field_SlugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_field_slug = /** @type {((inputs?: Jams_Admin_Field_SlugInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Field_SlugInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_field_slug(inputs)
	if (locale === "de") return de_jams_admin_field_slug(inputs)
	if (locale === "fr") return fr_jams_admin_field_slug(inputs)
	if (locale === "it") return it_jams_admin_field_slug(inputs)
	if (locale === "nl") return nl_jams_admin_field_slug(inputs)
	if (locale === "pl") return pl_jams_admin_field_slug(inputs)
	if (locale === "pt") return pt_jams_admin_field_slug(inputs)
	if (locale === "ru") return ru_jams_admin_field_slug(inputs)
	if (locale === "sv") return sv_jams_admin_field_slug(inputs)
	if (locale === "tr") return tr_jams_admin_field_slug(inputs)
	if (locale === "zh") return zh_jams_admin_field_slug(inputs)
	if (locale === "ja") return ja_jams_admin_field_slug(inputs)
	return en_jams_admin_field_slug(inputs)
});

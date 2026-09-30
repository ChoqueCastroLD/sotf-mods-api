/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Field_SlugInputs */

const en_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Address`)
};

const es_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dirección`)
};

const de_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse`)
};

const fr_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse`)
};

const it_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzo`)
};

const nl_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const pl_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const pt_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereço`)
};

const ru_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес`)
};

const sv_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adress`)
};

const tr_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const zh_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地址`)
};

const ja_kits_field_slug = /** @type {(inputs: Kits_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレス`)
};

/**
* | output |
* | --- |
* | "Address" |
*
* @param {Kits_Field_SlugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_field_slug = /** @type {((inputs?: Kits_Field_SlugInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Field_SlugInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_field_slug(inputs)
	if (locale === "de") return de_kits_field_slug(inputs)
	if (locale === "fr") return fr_kits_field_slug(inputs)
	if (locale === "it") return it_kits_field_slug(inputs)
	if (locale === "nl") return nl_kits_field_slug(inputs)
	if (locale === "pl") return pl_kits_field_slug(inputs)
	if (locale === "pt") return pt_kits_field_slug(inputs)
	if (locale === "ru") return ru_kits_field_slug(inputs)
	if (locale === "sv") return sv_kits_field_slug(inputs)
	if (locale === "tr") return tr_kits_field_slug(inputs)
	if (locale === "zh") return zh_kits_field_slug(inputs)
	if (locale === "ja") return ja_kits_field_slug(inputs)
	return en_kits_field_slug(inputs)
});

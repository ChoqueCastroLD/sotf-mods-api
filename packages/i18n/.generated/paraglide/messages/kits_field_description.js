/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Field_DescriptionInputs */

const en_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const es_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción`)
};

const de_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung`)
};

const fr_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const it_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione`)
};

const nl_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving`)
};

const pl_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição`)
};

const ru_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning`)
};

const tr_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama`)
};

const zh_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`说明`)
};

const ja_kits_field_description = /** @type {(inputs: Kits_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Kits_Field_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_field_description = /** @type {((inputs?: Kits_Field_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Field_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_field_description(inputs)
	if (locale === "de") return de_kits_field_description(inputs)
	if (locale === "fr") return fr_kits_field_description(inputs)
	if (locale === "it") return it_kits_field_description(inputs)
	if (locale === "nl") return nl_kits_field_description(inputs)
	if (locale === "pl") return pl_kits_field_description(inputs)
	if (locale === "pt") return pt_kits_field_description(inputs)
	if (locale === "ru") return ru_kits_field_description(inputs)
	if (locale === "sv") return sv_kits_field_description(inputs)
	if (locale === "tr") return tr_kits_field_description(inputs)
	if (locale === "zh") return zh_kits_field_description(inputs)
	if (locale === "ja") return ja_kits_field_description(inputs)
	return en_kits_field_description(inputs)
});

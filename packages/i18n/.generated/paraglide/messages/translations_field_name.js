/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Translations_Field_NameInputs */

const en_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Title in ${i?.language}`)
};

const es_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Título en ${i?.language}`)
};

const de_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Titel auf ${i?.language}`)
};

const fr_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Titre en ${i?.language}`)
};

const it_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Titolo in ${i?.language}`)
};

const nl_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Titel in het ${i?.language}`)
};

const pl_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tytuł (${i?.language})`)
};

const pt_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Título em ${i?.language}`)
};

const ru_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Название (${i?.language})`)
};

const sv_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Titel på ${i?.language}`)
};

const tr_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Başlık (${i?.language})`)
};

const zh_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`标题（${i?.language}）`)
};

const ja_translations_field_name = /** @type {(inputs: Translations_Field_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`タイトル（${i?.language}）`)
};

/**
* | output |
* | --- |
* | "Title in {language}" |
*
* @param {Translations_Field_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_field_name = /** @type {((inputs: Translations_Field_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Field_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_field_name(inputs)
	if (locale === "de") return de_translations_field_name(inputs)
	if (locale === "fr") return fr_translations_field_name(inputs)
	if (locale === "it") return it_translations_field_name(inputs)
	if (locale === "nl") return nl_translations_field_name(inputs)
	if (locale === "pl") return pl_translations_field_name(inputs)
	if (locale === "pt") return pt_translations_field_name(inputs)
	if (locale === "ru") return ru_translations_field_name(inputs)
	if (locale === "sv") return sv_translations_field_name(inputs)
	if (locale === "tr") return tr_translations_field_name(inputs)
	if (locale === "zh") return zh_translations_field_name(inputs)
	if (locale === "ja") return ja_translations_field_name(inputs)
	return en_translations_field_name(inputs)
});

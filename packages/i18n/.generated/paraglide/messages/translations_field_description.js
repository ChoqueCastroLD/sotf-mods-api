/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Translations_Field_DescriptionInputs */

const en_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Description in ${i?.language} (Markdown)`)
};

const es_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descripción en ${i?.language} (Markdown)`)
};

const de_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beschreibung auf ${i?.language} (Markdown)`)
};

const fr_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Description en ${i?.language} (Markdown)`)
};

const it_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descrizione in ${i?.language} (Markdown)`)
};

const nl_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beschrijving in het ${i?.language} (Markdown)`)
};

const pl_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opis — ${i?.language} (Markdown)`)
};

const pt_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descrição em ${i?.language} (Markdown)`)
};

const ru_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Описание (${i?.language}, Markdown)`)
};

const sv_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beskrivning på ${i?.language} (Markdown)`)
};

const tr_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Açıklama (${i?.language}, Markdown)`)
};

const zh_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`详细描述（${i?.language}，Markdown）`)
};

const ja_translations_field_description = /** @type {(inputs: Translations_Field_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`説明（${i?.language}、Markdown）`)
};

/**
* | output |
* | --- |
* | "Description in {language} (Markdown)" |
*
* @param {Translations_Field_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_field_description = /** @type {((inputs: Translations_Field_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Field_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_field_description(inputs)
	if (locale === "de") return de_translations_field_description(inputs)
	if (locale === "fr") return fr_translations_field_description(inputs)
	if (locale === "it") return it_translations_field_description(inputs)
	if (locale === "nl") return nl_translations_field_description(inputs)
	if (locale === "pl") return pl_translations_field_description(inputs)
	if (locale === "pt") return pt_translations_field_description(inputs)
	if (locale === "ru") return ru_translations_field_description(inputs)
	if (locale === "sv") return sv_translations_field_description(inputs)
	if (locale === "tr") return tr_translations_field_description(inputs)
	if (locale === "zh") return zh_translations_field_description(inputs)
	if (locale === "ja") return ja_translations_field_description(inputs)
	return en_translations_field_description(inputs)
});

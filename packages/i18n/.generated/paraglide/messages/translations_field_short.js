/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Translations_Field_ShortInputs */

const en_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Short description in ${i?.language}`)
};

const es_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descripción corta en ${i?.language}`)
};

const de_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kurzbeschreibung auf ${i?.language}`)
};

const fr_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Description courte en ${i?.language}`)
};

const it_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descrizione breve in ${i?.language}`)
};

const nl_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Korte beschrijving in het ${i?.language}`)
};

const pl_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Krótki opis — ${i?.language}`)
};

const pt_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descrição curta em ${i?.language}`)
};

const ru_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Краткое описание (${i?.language})`)
};

const sv_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kort beskrivning på ${i?.language}`)
};

const tr_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kısa açıklama (${i?.language})`)
};

const zh_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`简短描述（${i?.language}）`)
};

const ja_translations_field_short = /** @type {(inputs: Translations_Field_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`短い説明（${i?.language}）`)
};

/**
* | output |
* | --- |
* | "Short description in {language}" |
*
* @param {Translations_Field_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_field_short = /** @type {((inputs: Translations_Field_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Field_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_field_short(inputs)
	if (locale === "de") return de_translations_field_short(inputs)
	if (locale === "fr") return fr_translations_field_short(inputs)
	if (locale === "it") return it_translations_field_short(inputs)
	if (locale === "nl") return nl_translations_field_short(inputs)
	if (locale === "pl") return pl_translations_field_short(inputs)
	if (locale === "pt") return pt_translations_field_short(inputs)
	if (locale === "ru") return ru_translations_field_short(inputs)
	if (locale === "sv") return sv_translations_field_short(inputs)
	if (locale === "tr") return tr_translations_field_short(inputs)
	if (locale === "zh") return zh_translations_field_short(inputs)
	if (locale === "ja") return ja_translations_field_short(inputs)
	return en_translations_field_short(inputs)
});

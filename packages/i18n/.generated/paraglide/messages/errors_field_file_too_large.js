/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ limit: NonNullable<unknown> }} Errors_Field_File_Too_LargeInputs */

const en_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The file is larger than ${i?.limit}.`)
};

const es_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El archivo pesa más de ${i?.limit}.`)
};

const de_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Datei ist größer als ${i?.limit}.`)
};

const fr_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le fichier dépasse ${i?.limit}.`)
};

const it_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il file supera ${i?.limit}.`)
};

const nl_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Het bestand is groter dan ${i?.limit}.`)
};

const pl_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plik jest większy niż ${i?.limit}.`)
};

const pt_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O arquivo tem mais de ${i?.limit}.`)
};

const ru_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Файл больше ${i?.limit}.`)
};

const sv_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filen är större än ${i?.limit}.`)
};

const tr_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dosya ${i?.limit} boyutundan büyük.`)
};

const zh_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`文件超过 ${i?.limit}。`)
};

const ja_errors_field_file_too_large = /** @type {(inputs: Errors_Field_File_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ファイルが ${i?.limit} を超えています。`)
};

/**
* | output |
* | --- |
* | "The file is larger than {limit}." |
*
* @param {Errors_Field_File_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_field_file_too_large = /** @type {((inputs: Errors_Field_File_Too_LargeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Field_File_Too_LargeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_field_file_too_large(inputs)
	if (locale === "de") return de_errors_field_file_too_large(inputs)
	if (locale === "fr") return fr_errors_field_file_too_large(inputs)
	if (locale === "it") return it_errors_field_file_too_large(inputs)
	if (locale === "nl") return nl_errors_field_file_too_large(inputs)
	if (locale === "pl") return pl_errors_field_file_too_large(inputs)
	if (locale === "pt") return pt_errors_field_file_too_large(inputs)
	if (locale === "ru") return ru_errors_field_file_too_large(inputs)
	if (locale === "sv") return sv_errors_field_file_too_large(inputs)
	if (locale === "tr") return tr_errors_field_file_too_large(inputs)
	if (locale === "zh") return zh_errors_field_file_too_large(inputs)
	if (locale === "ja") return ja_errors_field_file_too_large(inputs)
	return en_errors_field_file_too_large(inputs)
});

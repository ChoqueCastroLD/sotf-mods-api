/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_Type_LibraryInputs */

const en_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Library`)
};

const es_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librería`)
};

const de_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothek`)
};

const fr_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothèque`)
};

const it_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libreria`)
};

const nl_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheek`)
};

const pl_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteka`)
};

const pt_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteca`)
};

const ru_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Библиотека`)
};

const sv_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotek`)
};

const tr_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kütüphane`)
};

const zh_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前置库`)
};

const ja_upload_manifest_type_library = /** @type {(inputs: Upload_Manifest_Type_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブラリ`)
};

/**
* | output |
* | --- |
* | "Library" |
*
* @param {Upload_Manifest_Type_LibraryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_type_library = /** @type {((inputs?: Upload_Manifest_Type_LibraryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_Type_LibraryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_type_library(inputs)
	if (locale === "de") return de_upload_manifest_type_library(inputs)
	if (locale === "fr") return fr_upload_manifest_type_library(inputs)
	if (locale === "it") return it_upload_manifest_type_library(inputs)
	if (locale === "nl") return nl_upload_manifest_type_library(inputs)
	if (locale === "pl") return pl_upload_manifest_type_library(inputs)
	if (locale === "pt") return pt_upload_manifest_type_library(inputs)
	if (locale === "ru") return ru_upload_manifest_type_library(inputs)
	if (locale === "sv") return sv_upload_manifest_type_library(inputs)
	if (locale === "tr") return tr_upload_manifest_type_library(inputs)
	if (locale === "zh") return zh_upload_manifest_type_library(inputs)
	if (locale === "ja") return ja_upload_manifest_type_library(inputs)
	return en_upload_manifest_type_library(inputs)
});

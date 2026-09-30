/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Kind_LibraryInputs */

const en_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Library`)
};

const es_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librería`)
};

const de_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothek`)
};

const fr_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothèque`)
};

const it_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libreria`)
};

const nl_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheek`)
};

const pl_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteka`)
};

const pt_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteca`)
};

const ru_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Библиотека`)
};

const sv_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotek`)
};

const tr_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kütüphane`)
};

const zh_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前置库`)
};

const ja_cmdk_kind_library = /** @type {(inputs: Cmdk_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブラリ`)
};

/**
* | output |
* | --- |
* | "Library" |
*
* @param {Cmdk_Kind_LibraryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_kind_library = /** @type {((inputs?: Cmdk_Kind_LibraryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Kind_LibraryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_kind_library(inputs)
	if (locale === "de") return de_cmdk_kind_library(inputs)
	if (locale === "fr") return fr_cmdk_kind_library(inputs)
	if (locale === "it") return it_cmdk_kind_library(inputs)
	if (locale === "nl") return nl_cmdk_kind_library(inputs)
	if (locale === "pl") return pl_cmdk_kind_library(inputs)
	if (locale === "pt") return pt_cmdk_kind_library(inputs)
	if (locale === "ru") return ru_cmdk_kind_library(inputs)
	if (locale === "sv") return sv_cmdk_kind_library(inputs)
	if (locale === "tr") return tr_cmdk_kind_library(inputs)
	if (locale === "zh") return zh_cmdk_kind_library(inputs)
	if (locale === "ja") return ja_cmdk_kind_library(inputs)
	return en_cmdk_kind_library(inputs)
});

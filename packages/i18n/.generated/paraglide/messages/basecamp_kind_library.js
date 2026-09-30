/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kind_LibraryInputs */

const en_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Library`)
};

const es_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librería`)
};

const de_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothek`)
};

const fr_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothèque`)
};

const it_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libreria`)
};

const nl_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheek`)
};

const pl_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteka`)
};

const pt_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteca`)
};

const ru_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Библиотека`)
};

const sv_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotek`)
};

const tr_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kütüphane`)
};

const zh_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`库`)
};

const ja_basecamp_kind_library = /** @type {(inputs: Basecamp_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブラリ`)
};

/**
* | output |
* | --- |
* | "Library" |
*
* @param {Basecamp_Kind_LibraryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kind_library = /** @type {((inputs?: Basecamp_Kind_LibraryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kind_LibraryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kind_library(inputs)
	if (locale === "de") return de_basecamp_kind_library(inputs)
	if (locale === "fr") return fr_basecamp_kind_library(inputs)
	if (locale === "it") return it_basecamp_kind_library(inputs)
	if (locale === "nl") return nl_basecamp_kind_library(inputs)
	if (locale === "pl") return pl_basecamp_kind_library(inputs)
	if (locale === "pt") return pt_basecamp_kind_library(inputs)
	if (locale === "ru") return ru_basecamp_kind_library(inputs)
	if (locale === "sv") return sv_basecamp_kind_library(inputs)
	if (locale === "tr") return tr_basecamp_kind_library(inputs)
	if (locale === "zh") return zh_basecamp_kind_library(inputs)
	if (locale === "ja") return ja_basecamp_kind_library(inputs)
	return en_basecamp_kind_library(inputs)
});

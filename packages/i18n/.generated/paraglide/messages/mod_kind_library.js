/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Kind_LibraryInputs */

const en_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Library`)
};

const es_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librería`)
};

const de_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothek`)
};

const fr_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothèque`)
};

const it_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libreria`)
};

const nl_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheek`)
};

const pl_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteka`)
};

const pt_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteca`)
};

const ru_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Библиотека`)
};

const sv_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotek`)
};

const tr_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kütüphane`)
};

const zh_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前置库`)
};

const ja_mod_kind_library = /** @type {(inputs: Mod_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブラリ`)
};

/**
* | output |
* | --- |
* | "Library" |
*
* @param {Mod_Kind_LibraryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_kind_library = /** @type {((inputs?: Mod_Kind_LibraryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Kind_LibraryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_kind_library(inputs)
	if (locale === "de") return de_mod_kind_library(inputs)
	if (locale === "fr") return fr_mod_kind_library(inputs)
	if (locale === "it") return it_mod_kind_library(inputs)
	if (locale === "nl") return nl_mod_kind_library(inputs)
	if (locale === "pl") return pl_mod_kind_library(inputs)
	if (locale === "pt") return pt_mod_kind_library(inputs)
	if (locale === "ru") return ru_mod_kind_library(inputs)
	if (locale === "sv") return sv_mod_kind_library(inputs)
	if (locale === "tr") return tr_mod_kind_library(inputs)
	if (locale === "zh") return zh_mod_kind_library(inputs)
	if (locale === "ja") return ja_mod_kind_library(inputs)
	return en_mod_kind_library(inputs)
});

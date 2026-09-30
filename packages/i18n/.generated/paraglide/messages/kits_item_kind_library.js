/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Item_Kind_LibraryInputs */

const en_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Library`)
};

const es_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librería`)
};

const de_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothek`)
};

const fr_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothèque`)
};

const it_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libreria`)
};

const nl_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheek`)
};

const pl_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteka`)
};

const pt_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteca`)
};

const ru_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Библиотека`)
};

const sv_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotek`)
};

const tr_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kütüphane`)
};

const zh_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前置库`)
};

const ja_kits_item_kind_library = /** @type {(inputs: Kits_Item_Kind_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブラリ`)
};

/**
* | output |
* | --- |
* | "Library" |
*
* @param {Kits_Item_Kind_LibraryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_kind_library = /** @type {((inputs?: Kits_Item_Kind_LibraryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_Kind_LibraryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_kind_library(inputs)
	if (locale === "de") return de_kits_item_kind_library(inputs)
	if (locale === "fr") return fr_kits_item_kind_library(inputs)
	if (locale === "it") return it_kits_item_kind_library(inputs)
	if (locale === "nl") return nl_kits_item_kind_library(inputs)
	if (locale === "pl") return pl_kits_item_kind_library(inputs)
	if (locale === "pt") return pt_kits_item_kind_library(inputs)
	if (locale === "ru") return ru_kits_item_kind_library(inputs)
	if (locale === "sv") return sv_kits_item_kind_library(inputs)
	if (locale === "tr") return tr_kits_item_kind_library(inputs)
	if (locale === "zh") return zh_kits_item_kind_library(inputs)
	if (locale === "ja") return ja_kits_item_kind_library(inputs)
	return en_kits_item_kind_library(inputs)
});

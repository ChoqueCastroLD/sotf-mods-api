/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Original_AuthorInputs */

const en_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Original author: ${i?.name}`)
};

const es_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor original: ${i?.name}`)
};

const de_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ursprünglicher Autor: ${i?.name}`)
};

const fr_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auteur original : ${i?.name}`)
};

const it_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autore originale: ${i?.name}`)
};

const nl_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oorspronkelijke auteur: ${i?.name}`)
};

const pl_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pierwotny autor: ${i?.name}`)
};

const pt_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor original: ${i?.name}`)
};

const ru_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Оригинальный автор: ${i?.name}`)
};

const sv_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ursprunglig upphovsperson: ${i?.name}`)
};

const tr_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Orijinal yapımcı: ${i?.name}`)
};

const zh_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原作者：${i?.name}`)
};

const ja_mod_original_author = /** @type {(inputs: Mod_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原作者：${i?.name}`)
};

/**
* | output |
* | --- |
* | "Original author: {name}" |
*
* @param {Mod_Original_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_original_author = /** @type {((inputs: Mod_Original_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Original_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_original_author(inputs)
	if (locale === "de") return de_mod_original_author(inputs)
	if (locale === "fr") return fr_mod_original_author(inputs)
	if (locale === "it") return it_mod_original_author(inputs)
	if (locale === "nl") return nl_mod_original_author(inputs)
	if (locale === "pl") return pl_mod_original_author(inputs)
	if (locale === "pt") return pt_mod_original_author(inputs)
	if (locale === "ru") return ru_mod_original_author(inputs)
	if (locale === "sv") return sv_mod_original_author(inputs)
	if (locale === "tr") return tr_mod_original_author(inputs)
	if (locale === "zh") return zh_mod_original_author(inputs)
	if (locale === "ja") return ja_mod_original_author(inputs)
	return en_mod_original_author(inputs)
});

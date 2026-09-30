/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Builds_Original_AuthorInputs */

const en_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Original author: ${i?.author}`)
};

const es_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor original: ${i?.author}`)
};

const de_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ursprünglicher Autor: ${i?.author}`)
};

const fr_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auteur d’origine : ${i?.author}`)
};

const it_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autore originale: ${i?.author}`)
};

const nl_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oorspronkelijke auteur: ${i?.author}`)
};

const pl_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pierwotny autor: ${i?.author}`)
};

const pt_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor original: ${i?.author}`)
};

const ru_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Первоначальный автор: ${i?.author}`)
};

const sv_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ursprunglig upphovsperson: ${i?.author}`)
};

const tr_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Asıl yazar: ${i?.author}`)
};

const zh_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原作者：${i?.author}`)
};

const ja_builds_original_author = /** @type {(inputs: Builds_Original_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`オリジナル作者：${i?.author}`)
};

/**
* | output |
* | --- |
* | "Original author: {author}" |
*
* @param {Builds_Original_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_original_author = /** @type {((inputs: Builds_Original_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Original_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_original_author(inputs)
	if (locale === "de") return de_builds_original_author(inputs)
	if (locale === "fr") return fr_builds_original_author(inputs)
	if (locale === "it") return it_builds_original_author(inputs)
	if (locale === "nl") return nl_builds_original_author(inputs)
	if (locale === "pl") return pl_builds_original_author(inputs)
	if (locale === "pt") return pt_builds_original_author(inputs)
	if (locale === "ru") return ru_builds_original_author(inputs)
	if (locale === "sv") return sv_builds_original_author(inputs)
	if (locale === "tr") return tr_builds_original_author(inputs)
	if (locale === "zh") return zh_builds_original_author(inputs)
	if (locale === "ja") return ja_builds_original_author(inputs)
	return en_builds_original_author(inputs)
});

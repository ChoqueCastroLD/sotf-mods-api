/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Builds_By_AuthorInputs */

const en_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`by ${i?.author}`)
};

const es_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.author}`)
};

const de_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`von ${i?.author}`)
};

const fr_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`par ${i?.author}`)
};

const it_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`di ${i?.author}`)
};

const nl_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`door ${i?.author}`)
};

const pl_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`autor: ${i?.author}`)
};

const pt_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`por ${i?.author}`)
};

const ru_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`автор: ${i?.author}`)
};

const sv_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`av ${i?.author}`)
};

const tr_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.author} tarafından`)
};

const zh_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者 ${i?.author}`)
};

const ja_builds_by_author = /** @type {(inputs: Builds_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：${i?.author}`)
};

/**
* | output |
* | --- |
* | "by {author}" |
*
* @param {Builds_By_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_by_author = /** @type {((inputs: Builds_By_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_By_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_by_author(inputs)
	if (locale === "de") return de_builds_by_author(inputs)
	if (locale === "fr") return fr_builds_by_author(inputs)
	if (locale === "it") return it_builds_by_author(inputs)
	if (locale === "nl") return nl_builds_by_author(inputs)
	if (locale === "pl") return pl_builds_by_author(inputs)
	if (locale === "pt") return pt_builds_by_author(inputs)
	if (locale === "ru") return ru_builds_by_author(inputs)
	if (locale === "sv") return sv_builds_by_author(inputs)
	if (locale === "tr") return tr_builds_by_author(inputs)
	if (locale === "zh") return zh_builds_by_author(inputs)
	if (locale === "ja") return ja_builds_by_author(inputs)
	return en_builds_by_author(inputs)
});

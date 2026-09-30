/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Me_By_AuthorInputs */

const en_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`by ${i?.author}`)
};

const es_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.author}`)
};

const de_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`von ${i?.author}`)
};

const fr_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`par ${i?.author}`)
};

const it_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`di ${i?.author}`)
};

const nl_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`door ${i?.author}`)
};

const pl_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`autor: ${i?.author}`)
};

const pt_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.author}`)
};

const ru_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`автор: ${i?.author}`)
};

const sv_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`av ${i?.author}`)
};

const tr_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`yapımcı: ${i?.author}`)
};

const zh_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：${i?.author}`)
};

const ja_me_by_author = /** @type {(inputs: Me_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：${i?.author}`)
};

/**
* | output |
* | --- |
* | "by {author}" |
*
* @param {Me_By_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_by_author = /** @type {((inputs: Me_By_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_By_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_by_author(inputs)
	if (locale === "de") return de_me_by_author(inputs)
	if (locale === "fr") return fr_me_by_author(inputs)
	if (locale === "it") return it_me_by_author(inputs)
	if (locale === "nl") return nl_me_by_author(inputs)
	if (locale === "pl") return pl_me_by_author(inputs)
	if (locale === "pt") return pt_me_by_author(inputs)
	if (locale === "ru") return ru_me_by_author(inputs)
	if (locale === "sv") return sv_me_by_author(inputs)
	if (locale === "tr") return tr_me_by_author(inputs)
	if (locale === "zh") return zh_me_by_author(inputs)
	if (locale === "ja") return ja_me_by_author(inputs)
	return en_me_by_author(inputs)
});

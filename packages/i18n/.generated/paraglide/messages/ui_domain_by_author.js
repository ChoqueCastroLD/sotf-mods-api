/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Ui_Domain_By_AuthorInputs */

const en_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`by ${i?.author}`)
};

const es_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.author}`)
};

const de_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`von ${i?.author}`)
};

const fr_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`par ${i?.author}`)
};

const it_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`di ${i?.author}`)
};

const nl_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`door ${i?.author}`)
};

const pl_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`autor: ${i?.author}`)
};

const pt_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`por ${i?.author}`)
};

const ru_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`автор: ${i?.author}`)
};

const sv_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`av ${i?.author}`)
};

const tr_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.author} tarafından`)
};

const zh_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者 ${i?.author}`)
};

const ja_ui_domain_by_author = /** @type {(inputs: Ui_Domain_By_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：${i?.author}`)
};

/**
* | output |
* | --- |
* | "by {author}" |
*
* @param {Ui_Domain_By_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_by_author = /** @type {((inputs: Ui_Domain_By_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_By_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_by_author(inputs)
	if (locale === "de") return de_ui_domain_by_author(inputs)
	if (locale === "fr") return fr_ui_domain_by_author(inputs)
	if (locale === "it") return it_ui_domain_by_author(inputs)
	if (locale === "nl") return nl_ui_domain_by_author(inputs)
	if (locale === "pl") return pl_ui_domain_by_author(inputs)
	if (locale === "pt") return pt_ui_domain_by_author(inputs)
	if (locale === "ru") return ru_ui_domain_by_author(inputs)
	if (locale === "sv") return sv_ui_domain_by_author(inputs)
	if (locale === "tr") return tr_ui_domain_by_author(inputs)
	if (locale === "zh") return zh_ui_domain_by_author(inputs)
	if (locale === "ja") return ja_ui_domain_by_author(inputs)
	return en_ui_domain_by_author(inputs)
});

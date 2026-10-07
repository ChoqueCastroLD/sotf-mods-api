/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_AuthorInputs */

const en_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Author`)
};

const es_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const de_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const fr_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur`)
};

const it_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autore`)
};

const nl_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker`)
};

const pl_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const pt_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const ru_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazar`)
};

const zh_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

const ja_ranger_filter_author = /** @type {(inputs: Ranger_Filter_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

/**
* | output |
* | --- |
* | "Author" |
*
* @param {Ranger_Filter_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_author = /** @type {((inputs?: Ranger_Filter_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_author(inputs)
	if (locale === "de") return de_ranger_filter_author(inputs)
	if (locale === "fr") return fr_ranger_filter_author(inputs)
	if (locale === "it") return it_ranger_filter_author(inputs)
	if (locale === "nl") return nl_ranger_filter_author(inputs)
	if (locale === "pl") return pl_ranger_filter_author(inputs)
	if (locale === "pt") return pt_ranger_filter_author(inputs)
	if (locale === "ru") return ru_ranger_filter_author(inputs)
	if (locale === "sv") return sv_ranger_filter_author(inputs)
	if (locale === "tr") return tr_ranger_filter_author(inputs)
	if (locale === "zh") return zh_ranger_filter_author(inputs)
	if (locale === "ja") return ja_ranger_filter_author(inputs)
	return en_ranger_filter_author(inputs)
});
